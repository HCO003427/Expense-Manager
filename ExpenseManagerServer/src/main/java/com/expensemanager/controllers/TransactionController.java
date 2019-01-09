package com.expensemanager.controllers;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.expensemanager.models.Transactions;
import com.expensemanager.repos.TransactionRepo;

@CrossOrigin("*")	
@RestController
public class TransactionController {
	
	@Autowired
	TransactionRepo repo;
	
	@GetMapping(path="/transactions/{date}")
	public List<Transactions> getTransactionByDate(@PathVariable("date") String date) throws ParseException{
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd"); 
		Date inputDate= df.parse(date);
		java.sql.Date sqlDate = new java.sql.Date(inputDate.getTime());
		System.out.println(sqlDate);
		repo.findAllByDate(sqlDate).forEach(System.out::println);
		return repo.findAllByDate(sqlDate);
		//repo.findAll().forEach(System.out::println);
		//return repo.findAll();
		
	
	}
}
