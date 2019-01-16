import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../Models/user-login.model';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:8081/api/users';
  constructor(private router: Router, private http: HttpClient) { }

  login(loginForm: LoginForm): any {
    const headers = new HttpHeaders();
      headers.append('Authorization', 'Basic ' + btoa('user:05b69817-a057-4926-a1f2-e94ee8938eee'));
      headers.append('Access-Control-Allow-Origin', 'http://localhost:8000');
headers.append('Access-Control-Allow-Credentials', 'true');
    this.http.post<LoginForm>(this.URL, loginForm, {headers: headers}).subscribe(
      user => {
        if (user.user_id !== 0 && user.user_name === loginForm.user_name) {
          localStorage.setItem('user', 'admin');
          console.log(localStorage.getItem('user'));
          this.router.navigate(['/home']);
          return true;
        } else {
          return false;
        }
      },
      error => {
        console.log('user doesnt exists');
      }
    );
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
