import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transactions } from '../Models/Transactions.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  private URL = 'http://localhost:8081/api/transactions';
  constructor(private http: HttpClient) { }

  getTransactionsbyDate(date: string): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(`${this.URL}/${date}`);

  }

  updateTransaction(transaction: Transactions): Observable<Transactions> {
    return this.http.post<Transactions>(this.URL, transaction);
  }

  deleteTransaction(transaction: Transactions): Observable<any> {
    const headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Origin', '*');
      return this.http.delete<any>(`${this.URL}/${transaction.transaction_id}`, {headers: headers});
  }
}
