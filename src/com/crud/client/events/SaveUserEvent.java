package com.crud.client.events;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;

public class SaveUserEvent extends GwtEvent<SaveUserEvent.SaveUserHandler> {

	public static Type<SaveUserHandler> TYPE = new Type<SaveUserHandler>();

	public interface SaveUserHandler extends EventHandler {
		void onSaveUser(SaveUserEvent event);
	}

	public SaveUserEvent() {
	}

	@Override
	protected void dispatch(SaveUserHandler handler) {
		handler.onSaveUser(this);
	}

	@Override
	public Type<SaveUserHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<SaveUserHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new SaveUserEvent());
	}
}
