package com.crud.shared.util;

import com.google.web.bindery.autobean.shared.AutoBean;
import com.google.web.bindery.autobean.shared.AutoBeanFactory;
import com.sencha.gxt.data.shared.SortInfo;
import com.sencha.gxt.data.shared.loader.FilterConfig;
import com.sencha.gxt.data.shared.loader.FilterPagingLoadConfig;

public interface MyAutoBeanFactory extends AutoBeanFactory {

	 AutoBean<FilterPagingLoadConfig> loadConfig();
	    
	 AutoBean<SortInfo> getSortInfo();
	    
	 AutoBean<FilterConfig> getFilterConfig();
}
