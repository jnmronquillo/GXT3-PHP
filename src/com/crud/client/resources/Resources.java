package com.crud.client.resources;

import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.ImageResource;

public interface Resources extends ClientBundle {

	 @Source("add.png")
	 ImageResource add();

	 @Source("delete.png")
	 ImageResource delete();

	 @Source("cancel.png")
	 ImageResource cancel();

	 @Source("edit.png")
	 ImageResource edit();

	 @Source("save.png")
	 ImageResource save();	 

	 @Source("exit.png")
	 ImageResource exit();
	 	 
	 @Source("bg.gif")
	 ImageResource bg();
	 
	 @Source("key.png")
     ImageResource key();
     
     @Source("disable.png")
     ImageResource disable();
     
     @Source("table.png")
     ImageResource table();
	 
	 @Source("Commons.css")
	 CommonsCss commonsCss();
	 
}