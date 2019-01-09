import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transactions } from '../Models/Transactions.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  private URL = 'http://localhost:8080/transactions';
  constructor(private http: HttpClient) { }

  getTransactionsbyDate(date: string): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(`${this.URL}/${date}`);

  }
}
