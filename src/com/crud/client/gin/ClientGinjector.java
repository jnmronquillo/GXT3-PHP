package com.crud.client.gin;

import com.crud.client.presenter.LayoutPresenter;
import com.crud.client.presenter.WelcomePresenter;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.inject.client.AsyncProvider;
import com.google.gwt.inject.client.GinModules;
import com.google.gwt.inject.client.Ginjector;
import com.gwtplatform.dispatch.client.gin.DispatchAsyncModule;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.crud.client.presenter.UserPresenter;

@GinModules({ DispatchAsyncModule.class, ClientModule.class })
public interface ClientGinjector extends Ginjector {

	EventBus getEventBus();

	PlaceManager getPlaceManager();
	AsyncProvider<LayoutPresenter> getLayoutPresenter();
	AsyncProvider<WelcomePresenter> getWelcomePresenter();

	AsyncProvider<UserPresenter> getUserPresenter();


}
