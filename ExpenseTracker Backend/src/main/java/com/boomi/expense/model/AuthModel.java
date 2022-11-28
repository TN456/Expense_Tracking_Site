package com.boomi.expense.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class AuthModel {

	private String email;

	private String password;
}
