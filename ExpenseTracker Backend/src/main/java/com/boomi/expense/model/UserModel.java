package com.boomi.expense.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class UserModel {

	@NotBlank(message = "Name should not be empty")
	private String name;

	@NotNull(message = "Email should not be empty")
	@Email(message = "Enter a valid email")
	private String email;

	@NotNull(message = "Password should not be empty")
	@Size(min = 8, message = "Password should be atleast 8 characters")
	private String password;

	@NotNull(message = "Address should not be empty")
	private String address;

	@NotNull(message = "Phone Number should not be empty")
	private String phoneno;
}
