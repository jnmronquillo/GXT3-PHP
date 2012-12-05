package com.crud.client.view;

import java.util.ArrayList;
import java.util.List;

import com.crud.client.presenter.UserPresenter;
import com.crud.shared.factory.AppAutoBeanFactory;
import com.crud.shared.jsonreader.UserJsonReader;
import com.crud.shared.listproxy.UserListProxy;
import com.crud.shared.proxy.UserProxy;
import com.crud.shared.util.MyHttpProxy;
import com.google.gwt.core.client.Callback;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.ViewImpl;
import com.sencha.gxt.core.client.IdentityValueProvider;
import com.sencha.gxt.core.client.Style.SelectionMode;
import com.sencha.gxt.core.client.ValueProvider;
import com.sencha.gxt.data.shared.ListStore;
import com.sencha.gxt.data.shared.ModelKeyProvider;
import com.sencha.gxt.data.shared.PropertyAccess;
import com.sencha.gxt.data.shared.SortInfo;
import com.sencha.gxt.data.shared.loader.FilterConfig;
import com.sencha.gxt.data.shared.loader.FilterPagingLoadConfig;
import com.sencha.gxt.data.shared.loader.FilterPagingLoadConfigBean;
import com.sencha.gxt.data.shared.loader.LoadResultListStoreBinding;
import com.sencha.gxt.data.shared.loader.PagingLoadResult;
import com.sencha.gxt.data.shared.loader.PagingLoader;
import com.sencha.gxt.data.shared.writer.JsonWriter;
import com.sencha.gxt.widget.core.client.ContentPanel;
import com.sencha.gxt.widget.core.client.button.TextButton;
import com.sencha.gxt.widget.core.client.grid.CheckBoxSelectionModel;
import com.sencha.gxt.widget.core.client.grid.ColumnConfig;
import com.sencha.gxt.widget.core.client.grid.ColumnModel;
import com.sencha.gxt.widget.core.client.grid.Grid;
import com.sencha.gxt.widget.core.client.grid.filters.GridFilters;
import com.sencha.gxt.widget.core.client.grid.filters.StringFilter;
import com.sencha.gxt.widget.core.client.selection.SelectionChangedEvent;
import com.sencha.gxt.widget.core.client.selection.SelectionChangedEvent.SelectionChangedHandler;
import com.sencha.gxt.widget.core.client.toolbar.PagingToolBar;

public class UserView extends ViewImpl implements UserPresenter.MyView {
	
	interface UserProxyProperties extends PropertyAccess<UserProxy> {
        ModelKeyProvider<UserProxy> id();
        ValueProvider<UserProxy, String> login();
        ValueProvider<UserProxy, String> first();
        ValueProvider<UserProxy, String> last();
    }

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, UserView> {
	}
	
	private ListStore<UserProxy> store;
    private PagingLoader<FilterPagingLoadConfig, PagingLoadResult<UserProxy>> loader;
    
    @UiField(provided = true)
    Grid<UserProxy> grid;
    
    @UiField(provided = true)
    PagingToolBar pagToolBar;
    
    @UiField
    ContentPanel panel;
    
    @UiField
    TextButton add;
    
    @UiField
    TextButton edit;
     
    @UiField
    TextButton delete;
        
    UserProxy user;

	@Inject
	public UserView(final Binder binder) {
		
		final AppAutoBeanFactory factory = GWT.create(AppAutoBeanFactory.class);
		 
	    UserJsonReader reader = new UserJsonReader(factory, UserListProxy.class);
	 
	    String path = "users/users.php";
	    RequestBuilder builder = new RequestBuilder(RequestBuilder.POST, path);
	    MyHttpProxy<FilterPagingLoadConfig> proxy = new MyHttpProxy<FilterPagingLoadConfig>(builder){
	    	@Override
	    	public void load(FilterPagingLoadConfig loadConfig,
	    			Callback<String, Throwable> callback) {
				
	    		List<SortInfo> sortInfo = createRequestSortInfo(factory, loadConfig.getSortInfo());
	            
	            List<FilterConfig> filterConfig = createRequestFilterConfig(factory, loadConfig.getFilters());
	            
	            loadConfig.setSortInfo(sortInfo);
	            loadConfig.setFilters(filterConfig);
	            				
	    		super.load(loadConfig, callback);
	    	}
	    };
	    //proxy.setWriter(new UrlEncodingWriter<FilterPagingLoadConfig>(factory, FilterPagingLoadConfig.class));
	    proxy.setWriter(new JsonWriter<FilterPagingLoadConfig>(factory, FilterPagingLoadConfig.class));
	    
	    loader = new PagingLoader<FilterPagingLoadConfig, PagingLoadResult<UserProxy>>(proxy, reader){
            @Override
            protected FilterPagingLoadConfig newLoadConfig() {
            	return new FilterPagingLoadConfigBean();
            }
        };
	    
        loader.setRemoteSort(true);
	    loader.useLoadConfig(factory.loadConfig().as());
	    	    
	    UserProxyProperties props = GWT.create(UserProxyProperties.class);
	    
	    store = new ListStore<UserProxy>(props.id());
	    loader.addLoadHandler(new LoadResultListStoreBinding<FilterPagingLoadConfig, UserProxy, PagingLoadResult<UserProxy>>(store));
        
	    pagToolBar = new PagingToolBar(3);
        pagToolBar.bind(loader);
        pagToolBar.getElement().getStyle().setProperty("borderBottom", "none");
        
        IdentityValueProvider<UserProxy> identity = new IdentityValueProvider<UserProxy>();
        final CheckBoxSelectionModel<UserProxy> sm = new CheckBoxSelectionModel<UserProxy>(identity);
        sm.setSelectionMode(SelectionMode.MULTI);
        
        ColumnConfig<UserProxy, String> usuarioColumn = new ColumnConfig<UserProxy, String>(props.login(), 80, "User Name");
        ColumnConfig<UserProxy, String> nombresColumn = new ColumnConfig<UserProxy, String>(props.first(), 150, "First Name");
        ColumnConfig<UserProxy, String> apellidosColumn = new ColumnConfig<UserProxy, String>(props.last(), 150, "Last Name");
         
        List<ColumnConfig<UserProxy, ?>> l = new ArrayList<ColumnConfig<UserProxy, ?>>();
        l.add(sm.getColumn());
        l.add(usuarioColumn);
        l.add(nombresColumn);
        l.add(apellidosColumn);
         
        ColumnModel<UserProxy> cm = new ColumnModel<UserProxy>(l);
        
        grid = new Grid<UserProxy>(store, cm) {
            @Override
            protected void onAfterFirstAttach() {
              super.onAfterFirstAttach();
              Scheduler.get().scheduleDeferred(new ScheduledCommand() {
                public void execute() {
                  loader.load();
                }
              });
            }
        };
         
        grid.setLoader(loader);
        grid.setSelectionModel(sm);                 
    	grid.getView().setStripeRows(true);

    	GridFilters<UserProxy> filters = new GridFilters<UserProxy>(loader);
        filters.initPlugin(grid);
        filters.setLocal(false);
        filters.addFilter(new StringFilter<UserProxy>(props.login()));
        filters.addFilter(new StringFilter<UserProxy>(props.first()));
        filters.addFilter(new StringFilter<UserProxy>(props.last()));
        
        grid.getSelectionModel().addSelectionChangedHandler(new SelectionChangedHandler<UserProxy>() {
            
            public void onSelectionChanged(
              SelectionChangedEvent<UserProxy> event) {
             int size = event.getSelection().size();
             if(size == 0){     
               edit.setEnabled(false);
               delete.setEnabled(false);
               user = null;
             }else if(size == 1){      
               edit.setEnabled(true);
               delete.setEnabled(true);
               user = event.getSelection().get(0);
             }else if(size > 1){
               edit.setEnabled(false);
               delete.setEnabled(true);
               user = null;
             }       
              
            }
        });

	    widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	public TextButton getAdd() {
        return add;
	}

	public TextButton getEdit() {
        return edit;
	}

	public TextButton getDelete() {
        return delete;
	}

	public void load(){
        loader.load();
	}

	public Grid<UserProxy> getGrid() {
        return grid;
	}

	public ContentPanel getPanel() {
        return panel;
	}
}
