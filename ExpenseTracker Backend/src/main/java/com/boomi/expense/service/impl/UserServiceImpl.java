package com.boomi.expense.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.boomi.expense.exceptions.ItemExistsException;
import com.boomi.expense.exceptions.ResourceNotFoundException;
import com.boomi.expense.model.User;
import com.boomi.expense.model.UserModel;
//import com.boomi.expense.model.UserModel;
import com.boomi.expense.repository.UserRepository;
import com.boomi.expense.service.UserService;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Autowired
	private UserRepository userRepository;

	@Override
	public User createUser(UserModel uModel) {
		if (userRepository.existsByEmail(uModel.getEmail())) {
		throw new ItemExistsException("User is already registered with email:"+uModel.getEmail());
		}
		User user = new User();
		BeanUtils.copyProperties(uModel, user);
		user.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}


	@Override
	public User readUser() {
		Long userId = getLoggedInUser().getId();
		return userRepository.findById(userId).orElseThrow(() ->
		new ResourceNotFoundException("User not found for the id:"+userId));
	}

	@Override
	public User updateUser(UserModel user) {
		User existingUser = readUser();
		existingUser.setName(user.getName() != null ? user.getName() : existingUser.getName());
		existingUser.setEmail(user.getEmail() != null ? user.getEmail() : existingUser.getEmail());
		existingUser.setPassword(
				user.getPassword() != null ? bcryptEncoder.encode(user.getPassword()) : existingUser.getPassword());
		return userRepository.save(existingUser);
	}

	@Override
	public void deleteUser() {
		User existingUser = readUser();
		userRepository.delete(existingUser);
	}

	@Override
	public User getLoggedInUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		return userRepository.findByEmail(email).orElseThrow(() ->new UsernameNotFoundException("User not found for the email "+email));
	}
}

























