import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder,private authService : AuthenticationService) {
    console.log("constructor invoked");
   }
  

   ngOnChanges(changes: SimpleChanges) {
     console.log("changes called");
     for (let propName in changes) {
       /*let chng = changes[propName];
       let cur  = JSON.stringify(chng.currentValue);
       let prev = JSON.stringify(chng.previousValue);
       this.changeLog.push(`propName: currentValue = cur, previousValue = prev`);*/
     }
   }
  
   ngOnDestroy() {
     console.log("destroy called");
   }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName : this.formBuilder.control('',Validators.required),
      password :this.formBuilder.control('',Validators.required)
    }
    );
  }
  login()
  {
    let id = this.loginForm.get('userName').value;
    let password = this.loginForm.get('password').value;
    let status = this.authService.userValidation(id,password);
    if(status)
    {
      alert ("login successfully");
      this.loginForm.reset();
    }
    else{
      alert ("username or password is wrong");
    }
  }
}
