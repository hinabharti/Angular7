import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assignment-comp',
  templateUrl: './assignment-comp.component.html',
  styleUrls: ['./assignment-comp.component.css']
})
export class AssignmentCompComponent implements OnInit {

  //projectForm : FormGroup;
  projectForm ;
  constructor(private formBuilder : FormBuilder) { }
   
  createFormWithFormGroup(): void
  {
    // this.projectForm = new FormGroup({
    //   projectName : new FormControl('',Validators.required),
    //   mail : new FormControl('',[Validators.email,Validators.required]),
    //   status : new FormControl(""),
    // })
  }
  createFormWithFormBuilder() : void
  {
   this.projectForm = this.formBuilder.group({
         projectName : this.formBuilder.control('',Validators.required),
         mail : this.formBuilder.control('',[Validators.email,Validators.required]),
         status : this.formBuilder.control(""),
   })
  }
  ngOnInit() {
    //this.createFormWithFormGroup();
    this.createFormWithFormBuilder();
  }
  save():void
  {
   console.log(this.projectForm.value);
  }
  valid : boolean ;
  updateNameValidation ():void
  {
    let val : string = this.projectForm.get("projectName").value;
    if(val.toUpperCase() === "TEST")
    {
      alert("test name is not allowed");
      this.projectForm.get("projectName").setValue("");
      this.projectForm.get("projectName").updateValueAndValidity();
    }
  }
}
