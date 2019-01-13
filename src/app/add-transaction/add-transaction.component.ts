import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transactions } from '../Models/Transactions.model';
import { TransactionServiceService } from '../services/transaction-service.service';
import { addDays } from 'date-fns';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private transactionService: TransactionServiceService,
    private router: Router) { }
  date: Date;
  shortDate: string;
  prevDate = new Date();
  newTransaction: Transactions;
  transactions: Array<Transactions>;
  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {
        this.date = new Date(paramMap.get('date'));
        console.log((addDays(this.date, 1)).toISOString().slice(0, 10));
        this.shortDate = (addDays(this.date, 1)).toISOString().slice(0, 10);
        console.log('Date set; calling Txn servcice for date', this.date);
        this.transactionService.getTransactionsbyDate(this.shortDate).subscribe(
          data => {
            console.log('Data fetched for given date', this.shortDate, ' is ', data);
            this.transactions = data;
          });
      }
    );
  }

  refreshTransactions() {
    this.ngOnInit();
  }

  addIncome() {
    this.newTransaction = new Transactions({
      'date': this.date,
      'type': 'Income'
    });
    this.transactions.push(this.newTransaction);
  }

  addExpense() {
    this.newTransaction = new Transactions({
      'date': this.date,
      'type': 'Expense'
    });
    this.transactions.push(this.newTransaction);
  }

  backToHome() {
    this.router.navigate(['/home']);
  }

  goNext() {
    console.log('Going to Next Date ', addDays(this.shortDate, 1));
    this.router.navigate(
      ['/addTransaction',
      { 'date': addDays(this.date, 1), replaceUrl: true}]
      );
  }

  goPrev() {
    console.log('Going Back to prev Date ');
    this.router.navigate(
      ['/addTransaction',
      { 'date': addDays(this.date, -1), replaceUrl: true}]
      );
    }
}
