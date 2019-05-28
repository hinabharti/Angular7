import { Component, OnInit } from '@angular/core';
import { NgForOfContext } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit (formData : NgForm) : void
  {
   console.log(formData);
   console.log(formData.value);
  }
}
