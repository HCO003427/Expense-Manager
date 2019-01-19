import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../Models/user-login.model';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ReturnStatement } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = {
    user_name: '',
    password: ''
  };
  errorMsg: string;
  isLoggedIn: boolean;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    console.log('User Name :' + this.loginForm.user_name + 'Password : ' + this.loginForm.password);
    this.isLoggedIn = this.loginService.login(this.loginForm);
    if (this.isLoggedIn) {
      console.log('In IF of login()');
      this.router.navigate(['/home']);
    } else {
      console.log('In ELSE of login()');
      this.errorMsg = 'Incorrect Credentials';
    }
    }


}
