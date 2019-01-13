package com.expensemanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@SpringBootApplication
public class ExpenseManagerServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExpenseManagerServerApplication.class, args);
	}

}

