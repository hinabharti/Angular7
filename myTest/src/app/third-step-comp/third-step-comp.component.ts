import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-third-step-comp',
  templateUrl: './third-step-comp.component.html',
  styleUrls: ['./third-step-comp.component.css']
})
export class ThirdStepCompComponent implements OnInit {
  selectForm ;
  @Output("clickSecondEnable")
  clickSecondEnable = new EventEmitter<boolean>();
  constructor(private formBuilder : FormBuilder) { }
   
  riskValue = [
    "In Network but control Lost",
    "Data corrupted",
    "Data leak to dark web",
    "System intrusion failed attempt",
    "System intrusion successful attempt"
  ]; 
  ngOnInit() {
    this.selectForm = this.formBuilder.group({
      risk : this.formBuilder.control('',Validators.required),
      severity : this.formBuilder.control('',Validators.required),
      solution : this.formBuilder.control('',Validators.required)
    })
  } 
    selectFIrst()
    {
       if(this.selectForm.valid)
       {
         this.clickSecondEnable.emit(true);
       }
    }


}
