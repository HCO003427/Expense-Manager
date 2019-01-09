package com.expensemanager.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.expensemanager.models.User;
import com.expensemanager.repos.UserRepo;

@CrossOrigin("*")	
@RestController
public class UserController {

	@Autowired
	UserRepo repo;
	
	@PostMapping(path="/users")
	public User validateUser(@RequestBody User user) {
		System.out.println(user.getUser_name());
		System.out.println(user.getPassword());
		System.out.println(user.toString() +" " +repo.findUserIfExists(user.getUser_name(), user.getPassword()));
		return repo.findUserIfExists(user.getUser_name(), user.getPassword());
		
	}
	
	@GetMapping(path="/users")
	public List<User> getAllUsers(){
		return repo.findAll();
	}
	
	
}