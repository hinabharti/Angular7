import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder,private authService : AuthenticationService) { }

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
