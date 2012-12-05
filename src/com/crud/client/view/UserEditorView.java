package com.crud.client.view;

import com.crud.client.presenter.UserEditorPresenter;
import com.crud.client.util.Enter;
import com.crud.client.util.GXTPopupViewImpl;
import com.crud.shared.proxy.UserProxy;
import com.google.gwt.editor.client.Editor;
import com.google.gwt.editor.client.SimpleBeanEditorDriver;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.sencha.gxt.widget.core.client.Window;
import com.sencha.gxt.widget.core.client.button.TextButton;
import com.sencha.gxt.widget.core.client.form.TextField;

public class UserEditorView extends GXTPopupViewImpl implements
		UserEditorPresenter.MyView, Editor<UserProxy> {

	public interface Driver extends SimpleBeanEditorDriver<UserProxy, UserEditorView>{  
    }
	
	private final Widget widget;

	public interface Binder extends UiBinder<Widget, UserEditorView> {
	}
	
	@UiField
    TextField login;
	
	@UiField
    TextField first;
	
	@UiField
    TextField last;
	
	@Ignore
    @UiField
    TextButton save;
	
	@Ignore
    @UiField
    TextButton cancel;
    
    @UiField
    Window dialog;
	
	private final Driver driver;
    private Enter enter;

	@Inject
	public UserEditorView(final EventBus eventBus, final Binder binder, Driver driver) {
		super(eventBus);
		this.driver = driver;
		widget = binder.createAndBindUi(this);
		
		dialog.setFocusWidget(login);
        enter = new Enter();
        enter.tab(save, login, first, last);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@Ignore
	public TextButton getSave() {
		return save;
	}
	
	@Ignore
	public TextButton getCancel() {
		return cancel;
	}
	
	public void setHeadingText(String text){
        dialog.setHeadingText(text);
	}

	public Window getDialog() {
        return dialog;
	}
	
	public void clearInvalid() {
        login.clearInvalid();
        first.clearInvalid();
        last.clearInvalid();         
	}
	
	public SimpleBeanEditorDriver<UserProxy, ?> createEditorDriver() {
        driver.initialize(this);
        return driver;
	}
	
}
