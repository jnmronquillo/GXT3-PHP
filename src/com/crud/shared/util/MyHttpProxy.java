package com.crud.shared.util;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.http.client.RequestBuilder;
import com.sencha.gxt.data.client.loader.HttpProxy;
import com.sencha.gxt.data.shared.SortInfo;
import com.sencha.gxt.data.shared.loader.FilterConfig;

public class MyHttpProxy<C> extends HttpProxy<C> {

	public MyHttpProxy(RequestBuilder builder) {
		super(builder);
	}
	
	protected List<SortInfo> createRequestSortInfo(MyAutoBeanFactory factory, List<? extends SortInfo> original) {
	    List<SortInfo> sortInfo = new ArrayList<SortInfo>();
	    
	    for (int i = 0; i < original.size(); i++) {
	      SortInfo originalSortInfo = original.get(i);
	      SortInfo reqSortInfo = factory.getSortInfo().as();
	      reqSortInfo.setSortDir(originalSortInfo.getSortDir());
	      reqSortInfo.setSortField(originalSortInfo.getSortField());
	      sortInfo.add(reqSortInfo);
	    }
	    
	    return sortInfo;
	  }
	  
	  
	  protected List<FilterConfig> createRequestFilterConfig(MyAutoBeanFactory factory, List<? extends FilterConfig> original) {
	    List<FilterConfig> sortInfo = new ArrayList<FilterConfig>();
	    
	    for (int i = 0; i < original.size(); i++) {
	      FilterConfig originalSortInfo = original.get(i);
	      FilterConfig reqSortInfo = factory.getFilterConfig().as();
	      
	      reqSortInfo.setComparison(originalSortInfo.getComparison());
	      reqSortInfo.setField(originalSortInfo.getField());
	      reqSortInfo.setType(originalSortInfo.getType());
	      reqSortInfo.setValue(originalSortInfo.getValue());
	      
	      sortInfo.add(reqSortInfo);
	    }
	    
	    return sortInfo;
	  }

}
