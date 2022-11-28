package com.boomi.expense.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.boomi.expense.model.User;
import com.boomi.expense.model.UserModel;
import com.boomi.expense.service.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	private UserService userService;


	@GetMapping("/profile")
	public ResponseEntity<User> readUser() {
		return new ResponseEntity<>(userService.readUser(), HttpStatus.OK);
	}

	@PutMapping("/profile")
	public ResponseEntity<User> updateUser(@RequestBody UserModel user) {
		return new ResponseEntity<>(userService.updateUser(user), HttpStatus.OK);
	}

	@DeleteMapping("/deactivate")
	public ResponseEntity<HttpStatus> deleteUser() {
		userService.deleteUser();
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
