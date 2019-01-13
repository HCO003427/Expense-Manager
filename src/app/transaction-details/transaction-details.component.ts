import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transactions } from '../Models/Transactions.model';
import { TransactionServiceService } from '../services/transaction-service.service';
import { Subject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  @Input() transaction: Transactions;
  @Output() transactionDeleted = new EventEmitter();
  editEnabled = false;
  amountHasErrors: boolean;
  constructor(private transactionService: TransactionServiceService) {
  }

  refresh: Subject<any> = new Subject();
  ngOnInit() {
    if (this.transaction.category === null || this.transaction.category === '') {
      this.editEnabled = true;
   }
  }

  editTransaction() {
    this.editEnabled =  true;
  }

  updateTransaction() {
    this.editEnabled = false;
    this.transactionService.updateTransaction(this.transaction)
    .subscribe(
      data => this.transaction = data,
    );
  }
  deleteTransaction() {
    this.transactionService.deleteTransaction(this.transaction)
    .subscribe(
      data => {
        this.transactionDeleted.emit();
      // this.refresh.next();
      },
      error => this.transactionDeleted.emit()
      );
  }

  validateAmount(value: any) {
    console.log('Validating Amount');
    if (value === 0 || value === null || value === '') {
      this.amountHasErrors = true;
      console.log('Amount has errors =', this.amountHasErrors);
    } else {
      this.amountHasErrors = false;
      console.log('Amount has errors =', this.amountHasErrors);
    }
  }
}
