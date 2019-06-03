import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-component',
  templateUrl: './form-builder-component.component.html',
  styleUrls: ['./form-builder-component.component.css']
})
export class FormBuilderComponentComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
  }
  employeeForm = this.formBuilder.group({
    name : this.formBuilder.control('',[]),
    address : this.formBuilder.group({
    city : this.formBuilder.control('',[]),
    street : this.formBuilder.control('',[])
  }),
    educationDetails : this.formBuilder.array([
      this.formBuilder.group({
        per : this.formBuilder.control('',Validators.required),
        degree : this.formBuilder.control('',[])
      })
    ])
  });
  get educationDetails()
  {
    return this.employeeForm.get('educationDetails') as FormArray;
  }
  addAddress() : void
  {
    
    this.educationDetails.push(this.formBuilder.group({
      per : this.formBuilder.control('',Validators.required),
      degree : '',
    }));
  } 
  save () : void
  {
    console.log(this.employeeForm.value);
  }
}
