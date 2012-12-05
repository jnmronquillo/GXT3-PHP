package com.crud.client.gin;

import com.crud.client.place.ClientPlaceManager;
import com.crud.client.place.DefaultPlace;
import com.crud.client.place.NameTokens;
import com.crud.client.presenter.LayoutPresenter;
import com.crud.client.presenter.UserEditorPresenter;
import com.crud.client.presenter.WelcomePresenter;
import com.crud.client.resources.Resources;
import com.crud.client.view.LayoutView;
import com.crud.client.view.MenuView;
import com.crud.client.view.UserView;
import com.crud.client.view.WelcomeView;
import com.google.inject.Singleton;
import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import com.crud.client.presenter.UserPresenter;
import com.crud.client.view.UserEditorView;
import com.crud.client.presenter.MenuPresenter;

public class ClientModule extends AbstractPresenterModule {

	@Override
	protected void configure() {
		install(new DefaultModule(ClientPlaceManager.class));

		bind(Resources.class).in(Singleton.class);
		
		bindPresenter(LayoutPresenter.class, LayoutPresenter.MyView.class,
				LayoutView.class, LayoutPresenter.MyProxy.class);

		bindPresenter(WelcomePresenter.class, WelcomePresenter.MyView.class,
				WelcomeView.class, WelcomePresenter.MyProxy.class);
		
		bindConstant().annotatedWith(DefaultPlace.class).to(NameTokens.welcome);



		bindPresenter(UserPresenter.class, UserPresenter.MyView.class,
				UserView.class, UserPresenter.MyProxy.class);

		bindPresenterWidget(UserEditorPresenter.class,
				UserEditorPresenter.MyView.class, UserEditorView.class);

		bindSingletonPresenterWidget(MenuPresenter.class,
				MenuPresenter.MyView.class, MenuView.class);
	}
}
