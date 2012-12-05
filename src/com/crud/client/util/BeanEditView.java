package com.crud.client.util;

import com.google.gwt.editor.client.Editor;
import com.google.gwt.editor.client.SimpleBeanEditorDriver;
import com.gwtplatform.mvp.client.View;

public interface BeanEditView<B> extends View, Editor<B>  {
	SimpleBeanEditorDriver<B, ?> createEditorDriver();
}
