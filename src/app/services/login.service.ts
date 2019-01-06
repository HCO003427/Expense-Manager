import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../Models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL = 'http://localhost:8080/';
  constructor(private router: Router, private http: HttpClient) { }

  login(loginForm: LoginForm): any {
    this.http.post<LoginForm>(`${URL}Users`, loginForm).subscribe(
      user => {
        if (user.user_id !== 0 && user.user_name === loginForm.user_name) {
          localStorage.setItem('user', 'admin');
          console.log(localStorage.getItem('user'));
          this.router.navigate(['/home']);
          return true;
        } else {
          return false;
        }
      }
    );
  }

  getUser() {
    return localStorage.getItem('user');
  }

 {

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
