import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transactions } from '../Models/Transactions.model';
import { HttpClient } from 'selenium-webdriver/http';
import { TransactionServiceService } from '../services/transaction-service.service';
import { addDays } from 'date-fns';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private transactionService: TransactionServiceService) { }
  date: Date;
  shortDate: string;
  newTransaction: Transactions;
  transactions: Array<Transactions>;
  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {
        this.date = new Date(paramMap.get('date'));
        console.log((addDays(this.date, 1)).toISOString().slice(0, 10));
      }
    );
   this.shortDate = (addDays(this.date, 1)).toISOString().slice(0, 10);
    console.log('Date set; calling Txn servcice for date', this.date);
   this.transactionService.getTransactionsbyDate(this.shortDate).subscribe(
     data => {
      console.log('Data fetched for given date is ', data);
      this.transactions = data;
     });
  }



}
