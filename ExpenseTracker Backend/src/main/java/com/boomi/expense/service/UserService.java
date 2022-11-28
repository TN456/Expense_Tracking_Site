package com.boomi.expense.service;

import com.boomi.expense.model.User;
import com.boomi.expense.model.UserModel;

public interface UserService {

	User createUser(UserModel user);

	User readUser();
	User updateUser(UserModel user);
	void deleteUser();

	User getLoggedInUser();

}
