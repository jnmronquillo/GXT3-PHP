package com.crud.client.view;

import com.crud.client.place.NameTokens;
import com.crud.client.presenter.MenuPresenter;
import com.crud.client.resources.Resources;
import com.crud.client.util.MenuDto;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.ViewImpl;
import com.sencha.gxt.core.client.ValueProvider;
import com.sencha.gxt.core.client.Style.SelectionMode;
import com.sencha.gxt.data.shared.ModelKeyProvider;
import com.sencha.gxt.data.shared.TreeStore;
import com.sencha.gxt.widget.core.client.tree.Tree;

public class MenuView extends ViewImpl implements MenuPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, MenuView> {
	}
	
	class KeyProvider implements ModelKeyProvider<MenuDto> {
	    public String getKey(MenuDto item) {
	      return item.getId().toString();
	    }
	}

	@UiField(provided = true)
	Tree<MenuDto, String> tree;

	@Inject
	public MenuView(final Binder binder, Resources resources) {
		
		TreeStore<MenuDto> store = new TreeStore<MenuDto>(new KeyProvider());
		MenuDto basicas = new MenuDto(1L, "Menu","");
		store.add(basicas);
		store.add(basicas, new MenuDto(2L, "Welcome",NameTokens.welcome));
		store.add(basicas, new MenuDto(3L, "Users",NameTokens.users));

		tree = new Tree<MenuDto, String>(store, new ValueProvider<MenuDto, String>() {

			@Override
			public String getValue(MenuDto object) {
				return object.getDescripcion();
			}

			@Override
			public void setValue(MenuDto object, String value) {
				
			}

			@Override
			public String getPath() {
				return "descripcion";
			}
		}) ;
		
		tree.setWidth(300);

	    tree.getStyle().setLeafIcon(resources.table());

	    tree.getSelectionModel().setSelectionMode(SelectionMode.SINGLE);
	    
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	public Tree<MenuDto, String> getTree() {
		return tree;
	}
}
