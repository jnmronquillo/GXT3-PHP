package com.crud.shared.jsonreader;

import com.crud.shared.listproxy.UserListProxy;
import com.crud.shared.proxy.UserProxy;
import com.google.web.bindery.autobean.shared.AutoBeanFactory;
import com.sencha.gxt.data.shared.loader.FilterPagingLoadConfig;
import com.sencha.gxt.data.shared.loader.JsonReader;
import com.sencha.gxt.data.shared.loader.PagingLoadResult;
import com.sencha.gxt.data.shared.loader.PagingLoadResultBean;

public class UserJsonReader extends JsonReader<PagingLoadResult<UserProxy>, UserListProxy> {
	
	public UserJsonReader(AutoBeanFactory factory,
			Class<UserListProxy> rootBeanType) {
		super(factory, rootBeanType);
	}
	
	@Override
    protected PagingLoadResult<UserProxy> createReturnData(Object loadConfig, UserListProxy incomingData) {
		FilterPagingLoadConfig pagingLoadConfig = (FilterPagingLoadConfig)loadConfig;
		
      return new PagingLoadResultBean<UserProxy>(incomingData.getData(), incomingData.getTotalCount(), pagingLoadConfig.getOffset());
    }

}
