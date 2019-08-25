import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  is_LoggedIn : boolean = false;
  constructor(private location : Location) { }

 userValidation(name : String,password : String) : boolean
 {
   if(name == "hina" && password == "hina")
   {
      this.is_LoggedIn = true;
      this.location.back();
      return true;
   }
   else
   return false;
 }
  public set isLoggedIn(is_LoggedIn : boolean)
  {
      this.is_LoggedIn = is_LoggedIn ;
  }
  public get isLoggedIn()
  {
    return this.is_LoggedIn;
  }
}
