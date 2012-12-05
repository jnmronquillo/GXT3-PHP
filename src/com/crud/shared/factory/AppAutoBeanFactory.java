package com.crud.shared.factory;

import com.crud.shared.listproxy.UserListProxy;
import com.crud.shared.proxy.UserProxy;
import com.crud.shared.util.MyAutoBeanFactory;
import com.google.web.bindery.autobean.shared.AutoBean;

public interface AppAutoBeanFactory extends MyAutoBeanFactory {
	AutoBean<UserListProxy> users(); 
	AutoBean<UserProxy> newUser(); 
}
