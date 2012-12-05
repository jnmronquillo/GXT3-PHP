package com.crud.client.view;

import com.crud.client.presenter.LayoutPresenter;
import com.crud.client.resources.Resources;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.ViewImpl;
import com.sencha.gxt.widget.core.client.ContentPanel;

public class LayoutView extends ViewImpl implements LayoutPresenter.MyView {

	@UiField ContentPanel contentPanel;//for nested presenter
	@UiField ContentPanel menuPanel;//for presenter widget
	
	private final Widget widget;

	public interface Binder extends UiBinder<Widget, LayoutView> {
	}

	@Inject
	public LayoutView(final Binder binder, final Resources resources) {
		resources.commonsCss ().ensureInjected ();//load css
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@Override
	public void setInSlot(Object slot, Widget content) {
		if(slot == LayoutPresenter.SLOT_content){
			contentPanel.clear();
			if(content != null){
				contentPanel.add(content);
				contentPanel.forceLayout();
			}
			return;
		}
		if(slot == LayoutPresenter.SLOT_menu){
			menuPanel.clear();
			if(content != null){
				menuPanel.add(content);
			}
			return;
		}
		
		super.setInSlot(slot, content);
	}
}
