import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) { }

  login(name: string, pass: string): boolean {
    if (name === 'admin' && pass === 'admin') {
      localStorage.setItem('user', 'admin');
      console.log(localStorage.getItem('user'));
      this.router.navigate(['/home']);
      return true;
    } else {
     return false;
    }
  }

  getUser() {
    return localStorage.getItem('user');
  }

  isLoggedIn() {

    if (!!this.getUser()) {
      console.log('inside login service');
      console.log(this.getUser());
      return true;
    } else {
      console.log('inside else part login service');
      return false;
    }

  }
}
