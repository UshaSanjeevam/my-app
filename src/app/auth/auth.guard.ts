import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router : Router){}
 canActivate(
   next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    //   if (localStorage.getItem('userToken') != null)
    //   return true;
    //   this.router.navigate(['/login']);
    //   return false;
    if (localStorage.getItem('WindowsLoginUser') !=(null|| undefined) || 
    localStorage.getItem('userToken')  !=(null|| undefined)|| localStorage.getItem("FormsLoginUserName")!=(null|| undefined))
    return true;
    this.router.navigate(['login']);
    return false;
  }
}