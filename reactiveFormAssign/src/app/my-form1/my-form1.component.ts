import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-form1',
  templateUrl: './my-form1.component.html',
  styleUrls: ['./my-form1.component.css']
})
export class MyForm1Component implements OnInit {
  profileForm = new FormGroup(
    {
      firstName : new FormControl(''),
      lastName : new FormControl(''),

    }
  )
  

  constructor() { }

  ngOnInit() {
  }
 
  onSubmit() : void
  {
    console.log(this.profileForm.value);
  }
}
