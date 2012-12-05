package com.crud.client.presenter;

import java.util.List;

import com.crud.client.events.SaveUserEvent;
import com.crud.client.events.SaveUserEvent.SaveUserHandler;
import com.crud.client.place.NameTokens;
import com.crud.shared.factory.AppAutoBeanFactory;
import com.crud.shared.listproxy.UserListProxy;
import com.crud.shared.proxy.UserProxy;
import com.google.gwt.editor.client.SimpleBeanEditorDriver;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.inject.Inject;
import com.google.web.bindery.autobean.shared.AutoBean;
import com.google.web.bindery.autobean.shared.AutoBeanCodex;
import com.google.web.bindery.autobean.shared.AutoBeanUtils;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.sencha.gxt.widget.core.client.ContentPanel;
import com.sencha.gxt.widget.core.client.Dialog;
import com.sencha.gxt.widget.core.client.box.ConfirmMessageBox;
import com.sencha.gxt.widget.core.client.button.TextButton;
import com.sencha.gxt.widget.core.client.event.HideEvent;
import com.sencha.gxt.widget.core.client.event.HideEvent.HideHandler;
import com.sencha.gxt.widget.core.client.event.SelectEvent;
import com.sencha.gxt.widget.core.client.event.SelectEvent.SelectHandler;
import com.sencha.gxt.widget.core.client.event.ShowEvent;
import com.sencha.gxt.widget.core.client.event.ShowEvent.ShowHandler;
import com.sencha.gxt.widget.core.client.grid.Grid;
import com.sencha.gxt.widget.core.client.info.Info;

public class UserPresenter extends
		Presenter<UserPresenter.MyView, UserPresenter.MyProxy> {

	public interface MyView extends View {
		public TextButton getAdd();
        public TextButton getEdit();
        public TextButton getDelete();
        public void load();
        public Grid<UserProxy> getGrid();            
        public ContentPanel getPanel();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.users)
	public interface MyProxy extends ProxyPlace<UserPresenter> {
	}
	
	private final SaveUserHandler saveUserHandler = new SaveUserHandler() {
        
        public void onSaveUser(SaveUserEvent event) {
          UserProxy user = editorDriver.flush();
          if(!editorDriver.hasErrors()){ 
        	  AutoBean<UserProxy> bean = AutoBeanUtils.getAutoBean(user);
        	  String json = AutoBeanCodex.encode(bean).getPayload();
        	  
        	  String path = "users/users.php?action=save";
      	      RequestBuilder builder = new RequestBuilder(RequestBuilder.PUT, path);
        	  
      	      try {
				builder.sendRequest(json, new RequestCallback() {
					
					@Override
					public void onResponseReceived(Request request, Response response) {
						Info.display("Users", "Save Successful");
                        getView().load(); 
					}
					
					@Override
					public void onError(Request request, Throwable exception) {

					}
				});
      	      } catch (RequestException e) {
				e.printStackTrace();
      	      }
              editorPresenter.getView().hide();
          }               
        }
	};
	
	private AppAutoBeanFactory factory;
	private UserEditorPresenter editorPresenter;
    private SimpleBeanEditorDriver<UserProxy, ?> editorDriver;
    private UserProxy user;

	@Inject
	public UserPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy, AppAutoBeanFactory factory, UserEditorPresenter editorPresenter) {
		super(eventBus, view, proxy);
		this.factory = factory;
		this.editorPresenter = editorPresenter;
        editorDriver = editorPresenter.getView().createEditorDriver();
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, LayoutPresenter.SLOT_content, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		registerHandler(getEventBus().addHandler(SaveUserEvent.getType(), saveUserHandler));
		
		editorPresenter.getView().getDialog().addHideHandler(new HideHandler() {
            
            public void onHide(HideEvent event) {
                getView().getPanel().unmask();
            }
        });
        editorPresenter.getView().getDialog().addShowHandler(new ShowHandler() {
                
            public void onShow(ShowEvent event) {
                getView().getPanel().mask();
            }
        });
        
        getView().getAdd().addSelectHandler(new SelectHandler() {
			
			@Override
			public void onSelect(SelectEvent event) {
				
				user = factory.newUser().as();
				editorDriver.edit(user);
				
				editorPresenter.getView().clearInvalid();                               
                editorPresenter.getView().setHeadingText("New User");
                        
                addToPopupSlot(editorPresenter);
			}
		});
        
        getView().getEdit().addSelectHandler(new SelectHandler() {
			
			@Override
			public void onSelect(SelectEvent event) {
				 user = getView().getGrid().getSelectionModel().getSelectedItem();
				 editorDriver.edit(user);
                 
	             editorPresenter.getView().clearInvalid();
	             editorPresenter.getView().setHeadingText("Edit User");
	                                                        
	             addToPopupSlot(editorPresenter);
			}
		});
        
        getView().getDelete().addSelectHandler(new SelectHandler() {
			
			@Override
			public void onSelect(SelectEvent event) {
				List<UserProxy> users = getView().getGrid().getSelectionModel().getSelectedItems();
                
                String mensaje;
                if(users.size() == 1)
                    mensaje = "Are you sure to delete user: "+users.get(0).getLogin();
                else
                    mensaje = "Are you sure to delete selected records";
                
                ConfirmMessageBox box = new ConfirmMessageBox("Users", mensaje);
                box.addHideHandler(new HideHandler() {
					
					@Override
					public void onHide(HideEvent event) {
						Dialog btn = (Dialog) event.getSource();
                        if(!"No".equals(btn.getHideButton().getText())){
                        	List<UserProxy> users = getView().getGrid().getSelectionModel().getSelectedItems();
                        	
                        	AutoBean<UserListProxy> beans= factory.users();
                        	beans.as().setData(users);
                       	  	String json = AutoBeanCodex.encode(beans).getPayload();
                       	  	
                       	  	String path = "users/users.php?action=delete";
                       	  	RequestBuilder builder = new RequestBuilder(RequestBuilder.PUT, path);
                   	  
                       	  	try {
                       	  		builder.sendRequest(json, new RequestCallback() {
           					
                       	  			@Override
                       	  			public void onResponseReceived(Request request, Response response) {
                       	  				Info.display("Users", "Delete Successful");
                       	  				getView().load(); 
                       	  			}
           					
                       	  			@Override
                       	  			public void onError(Request request, Throwable exception) {

                       	  			}
                       	  		});
                       	  	} catch (RequestException e) {
                       	  		e.printStackTrace();
                       	  	}
                        	
                        }
					}
				});
                box.show();
			}
		});
	}
}
