package com.boomi.expense.security;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.boomi.expense.model.User;
import com.boomi.expense.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		User existingUser = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found for the email:"+email));
		return new org.springframework.security.core.userdetails.User(existingUser.getEmail(), existingUser.getPassword(), getGrantedAuthority(existingUser));
	}
	private Collection<GrantedAuthority> getGrantedAuthority(User user) {
		Collection<GrantedAuthority> authorities = new ArrayList<>();
		
			authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
		
		return authorities;
	}
}
