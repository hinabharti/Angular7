import { Component, OnInit } from '@angular/core';
import { InquiryEmployeeService } from '../inquiry-employee.service';
import { Employee } from '../employee.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private inquiryService : InquiryEmployeeService,private formBuilder : FormBuilder) { }
  employeeList : Employee[] ;
  employeeObj :Employee ;
  employeeForm : FormGroup;
  updateFlag : boolean = false ;
  ngOnInit() {
   this.setData();
  }

  setData()
  {
    this.createEmployeeForm();
    this.inquiryService.getEmployeeDetails().subscribe(
      (employees : Employee[]) =>
      {
        this.employeeList = employees;
        console.log("employee List " + employees);
      }
    );
  }
     

   createEmployeeForm()
   {
    this.employeeForm = this.formBuilder.group({
      id :this.formBuilder.control('') ,
      name :this.formBuilder.control(''),
      designation :this.formBuilder.control('') ,
    });
   
   }

   save()
   {
       if(this.employeeForm.valid)
       {
          this.employeeObj= new Employee(this.employeeForm.controls.id.value,this.employeeForm.controls.name.value,this.employeeForm.controls.designation.value);
          this.inquiryService.saveEmployeeDetails( this.employeeObj).subscribe(
            (obj : Object) =>
            {
                      if(obj !=null)
                      {
                           this.setData();
                      }
            }
          ) 
       }
   }
   update()
   {
          if( this.employeeForm.valid)
          {
            this.employeeObj= new Employee(this.employeeForm.controls.id.value,this.employeeForm.controls.name.value,this.employeeForm.controls.designation.value);
            this.inquiryService.updateEmployeeDetails( this.employeeObj).subscribe(
              (obj : Object) =>
              {
                        if(obj !=null)
                        {
                            
                             this.setData();
                        }
              }
            )
          }
   }
   edit(id:number)
   {
    this.inquiryService.getEmployeeDetailsByID(id).subscribe(
    (employee : Employee) =>
    {      
          this.updateFlag = true;
           this.employeeForm.setValue({id:employee.id,name:employee.name,designation:employee.designation});
           let ctrl = this.employeeForm.get('id');
             ctrl.disable();
          });
   }
   delete(id:number)
   {
    this.inquiryService.delete(id).subscribe(
      (obj : Object) =>
      {
        if(obj !=null)
                        {
                             this.setData();
                        }
      });
   }
}
