package com.crud.client.resources;

import com.google.gwt.resources.client.CssResource;

public interface CommonsCss extends CssResource  {

	@ClassName("layout-header")
	String layout_header();
	
	@ClassName("layout-title")
	String layout_title();
	
	String logout();
	
	@ClassName("underline")
	String underline();
	
	@ClassName("button")
	String button();

	String exit();
	
	@ClassName("busy-indicator")
	String busy_indicator();
}
