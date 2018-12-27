import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Expense-Manager';
  public userLoogedIn: string;

  constructor(private router: Router) {

  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  ngDoCheck() {
    this.userLoogedIn = localStorage.getItem('user');
  }
}
