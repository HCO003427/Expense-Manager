package com.expensemanager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.expensemanager.models.User;
import com.expensemanager.repos.UserRepo;

@RestController
public class UserController {

	@Autowired
	UserRepo repo;
	
	@PostMapping(path="/users")
	public User validateUser(@RequestBody User user) {
		
		return repo.findUserIfExists(user.getUser_name(), user.getPassword());
		
	}
}
