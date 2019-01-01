import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../Models/user-login.model';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
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
  isLoggedIn: boolean;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    console.log('User Name :' + this.loginForm.userName + 'Password : ' + this.loginForm.password);
    this.isLoggedIn = this.loginService.login(this.loginForm.userName, this.loginForm.password);
    if (!this.isLoggedIn) {
      this.errorMsg = 'Incorrect Credentials';
    } else {
      return;
    }
    }


}
