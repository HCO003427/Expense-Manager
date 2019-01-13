import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
    providedIn: 'root'
  })
export class LoginCheck implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
        console.log('Guard Invoked');
        if (this.loginService.isLoggedIn()) {
            console.log('user Logged In');
            return true;
        } else {
            this.router.navigate(['login']);
            console.log('user not Logged In');
            return false;
        }

    }

}
