package com.boomi.expense.controller;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.boomi.expense.model.AuthModel;
import com.boomi.expense.model.JwtResponse;
import com.boomi.expense.model.User;
import com.boomi.expense.model.UserModel;
import com.boomi.expense.security.CustomUserDetailsService;
import com.boomi.expense.service.UserService;
import com.boomi.expense.util.JwtTokenUtil;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserService userService;

	@Autowired
	private CustomUserDetailsService userDetailsService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@PostMapping("/login")
	public ResponseEntity<JwtResponse> login(@RequestBody AuthModel authModel) throws Exception {

		authenticate(authModel.getEmail(), authModel.getPassword());  //Getting email and password from the user after login

		//we need to generate the jwt token
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authModel.getEmail());   //contains user details

		final String token = jwtTokenUtil.generateToken(userDetails);

		return new ResponseEntity<>(new JwtResponse(token), HttpStatus.OK);
	}

	private void authenticate(String email, String password) throws Exception {

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
		} catch (DisabledException e) {
			throw new Exception("User disabled");
		} catch (BadCredentialsException e) {
			throw new Exception("Bad Credentials");
		}

	}

	@PostMapping("/register")
	public ResponseEntity<User> save(@Valid @RequestBody UserModel user,@RequestHeader Map<String,String> headers) {
		return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
	}
}


















