package com.expensemanager.controllers;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	}
	
	@PostMapping(path="/transactions")
	public Transactions updateTransaction(@RequestBody Transactions transaction) {
		System.out.println("Transaction Updated/ saved");
		return repo.save(transaction);
	}
	
	@DeleteMapping(path="/transactions/{transaction_id}")
	public boolean deleteTransaction(@PathVariable("transaction_id") Transactions transaction) {
		System.out.println("Transaction Deleted");
		repo.deleteById(transaction.getTransaction_id());
		return true;
	}
}
