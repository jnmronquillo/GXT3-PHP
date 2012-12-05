package com.crud.client.presenter;

import com.crud.client.events.SaveUserEvent;
import com.crud.client.util.BeanEditView;
import com.crud.shared.proxy.UserProxy;
import com.google.gwt.event.shared.EventBus;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.PopupView;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.sencha.gxt.widget.core.client.Window;
import com.sencha.gxt.widget.core.client.button.TextButton;
import com.sencha.gxt.widget.core.client.event.SelectEvent;
import com.sencha.gxt.widget.core.client.event.SelectEvent.SelectHandler;

public class UserEditorPresenter extends
		PresenterWidget<UserEditorPresenter.MyView> {

	public interface MyView extends PopupView, BeanEditView<UserProxy> {
		public void clearInvalid();
		public void setHeadingText(String text);
        public Window getDialog();
		@Ignore
    	public TextButton getSave();
        @Ignore
    	public TextButton getCancel();
	}
	
	private EventBus eventBus;

	@Inject
	public UserEditorPresenter(final EventBus eventBus, final MyView view) {
		super(eventBus, view);
		this.eventBus = eventBus;
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		getView().getSave().addSelectHandler(new SelectHandler() {
			
			@Override
			public void onSelect(SelectEvent event) {
				SaveUserEvent saveRoleEvent = new SaveUserEvent();
		        eventBus.fireEvent(saveRoleEvent); 				
			}
		});
		
		getView().getCancel().addSelectHandler(new SelectHandler() {
			
			@Override
			public void onSelect(SelectEvent event) {
				getView().hide();				
			}
		});	
	}
}
