import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../Models/user-login.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = {
    userName: '',
    password: ''
  };
  errorMsg = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('User Name :' + this.loginForm.userName + 'Password : ' + this.loginForm.password);

    if (this.loginForm.userName === 'admin' && this.loginForm.password === 'admin') {
      localStorage.setItem('user', 'admin');
      console.log(localStorage.getItem('user'));
      this.router.navigate(['/home']);
    } else {
      this.errorMsg = 'Inavalid Credentials';
    }

  }

}
