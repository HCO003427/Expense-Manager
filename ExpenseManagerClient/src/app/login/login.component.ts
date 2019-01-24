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
    this.loginService.login(this.loginForm).subscribe(
      user => {
        if (!!user && user.user_id !== 0 && user.user_name === this.loginForm.user_name) {
          localStorage.setItem('user', 'admin');
          console.log(localStorage.getItem('user'));
          this.router.navigate(['/home']);
          } else {
          console.log('User not found - login service');
          this.errorMsg = 'Incorrect Credentials';

          }
      },
      error => {
        console.log('user doesnt exists');
      }
    );
    }
}
