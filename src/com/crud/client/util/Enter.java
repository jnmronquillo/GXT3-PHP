package com.crud.client.util;

import java.util.HashMap;
import java.util.Map;

import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyDownEvent;
import com.google.gwt.event.dom.client.KeyDownHandler;
import com.google.web.bindery.event.shared.HandlerRegistration;
import com.sencha.gxt.widget.core.client.button.TextButton;
import com.sencha.gxt.widget.core.client.event.SelectEvent;
import com.sencha.gxt.widget.core.client.form.ValueBaseField;

public class Enter {

        private Map<ValueBaseField<?>, HandlerRegistration> map;
        
        public Enter(){
                map = new HashMap<ValueBaseField<?>, HandlerRegistration>();
        }
         
        public void tab(final TextButton save, final ValueBaseField<?>...fields){
                for (int i = 0; i < fields.length - 1; i++)
                        focoEnter(fields[i], fields[i + 1]);
                
                
                if (map.get(fields[fields.length - 1]) != null) {
                        map.get(fields[fields.length - 1]).removeHandler();
                }
                
                
                HandlerRegistration handler = fields[fields.length - 1].addKeyDownHandler(new KeyDownHandler() {
                        
                        public void onKeyDown(KeyDownEvent event) {
                                if (event.getNativeKeyCode() == KeyCodes.KEY_ENTER) {
                                        fields[fields.length - 1].finishEditing();
                                        save.fireEvent(new SelectEvent());
//                                      fields[0].focus();
                                }
                        }
                });
                map.put(fields[fields.length - 1], handler);
        }

        private void focoEnter(ValueBaseField<?> field1,
                        final ValueBaseField<?> field2) {

                if(map.get(field1) != null){
                        map.get(field1).removeHandler();
                }
                
                HandlerRegistration handler = field1.addKeyDownHandler(new KeyDownHandler() {
                        
                        public void onKeyDown(KeyDownEvent event) {
                                if (event.getNativeKeyCode() == KeyCodes.KEY_ENTER) {
                                        field2.focus();
                                }
                        }
                });
                map.put(field1, handler);
        }
}
