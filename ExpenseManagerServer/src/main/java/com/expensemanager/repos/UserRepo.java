package com.expensemanager.repos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.expensemanager.models.User;

public interface UserRepo extends CrudRepository<User,Integer>{
	
	@Query("from User where user_name=?1 and password=?2")
	public User findUserIfExists(String user_name, String password);
		
	}

