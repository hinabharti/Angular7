import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  is_LoggedIn : boolean = false;
  constructor() { }

 userValidation(name : String,password : String) : boolean
 {
   if(name == "hina" && password == "hina")
   {
      this.is_LoggedIn = true;
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
