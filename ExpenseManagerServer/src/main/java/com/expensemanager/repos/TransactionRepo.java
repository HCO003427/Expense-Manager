package com.expensemanager.repos;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.expensemanager.models.Transactions;

public interface TransactionRepo extends JpaRepository<Transactions, Integer>{
	
	@Query("from Transactions where date=?1")
	List<Transactions> findAllByDate(java.sql.Date date);
}

	
