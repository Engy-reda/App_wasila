import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = localStorage.getItem('UserToken') ? true : false; 
      if (isLoggedIn)
      {
        return isLoggedIn;
      }
      else
      {
        this.router.navigate(['/home']);
        return isLoggedIn
      }
  }
  
}
