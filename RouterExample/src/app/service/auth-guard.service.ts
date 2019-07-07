import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router : Router,private authentication : AuthenticationService) { }

  canActivate(/* route: ActivatedRouteSnapshot, state: RouterStateSnapshot */):boolean
  {
  if(this.authentication.isLoggedIn)
  {
    return true;
  }
  alert("first login");
  this.router.navigate(['/login']);
   return false;
  }
  canActivatedChild()
  {
     
  }

}
