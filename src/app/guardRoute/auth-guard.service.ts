import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}

  canActivate(): boolean {
    let jwtHelper: JwtHelperService = new JwtHelperService();


    const token = localStorage.getItem('operador');

    if (token == null) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
