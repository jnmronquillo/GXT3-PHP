package com.crud.shared.listproxy;

import java.util.List;

import com.crud.shared.proxy.UserProxy;

public interface UserListProxy {
	List<UserProxy> getData();
	int getTotalCount();
	void setData(List<UserProxy> data);
}
