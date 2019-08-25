import { Component, OnInit } from '@angular/core';
import { ObservableSeviceService } from '../service/observable-sevice.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private observableService:ObservableSeviceService ) { }

   observerVal = {
    next : x => console.log(x),
    error : err => console.log(err),
    complete() { console.log("complete")}
   }
   subscribeObject :any;
  ngOnInit() {
    sessionStorage.setItem("test","testData");
    localStorage.setItem("id","hina");
    this.observableService.disp().subscribe(
      {next :  x =>
         console.log(x.id),
       error : y => 
       console.log("error"),
       complete :(() => 
       console.log("complete"))
      }
    )
    console.log("id is" + localStorage.getItem("id"));
    console.log("test session storage is" + sessionStorage.getItem("test"));
  /*   this.observableService.disp().subscribe(
      value => console.log(value)
    ) */

   /*  this.observableService.getNameFrom().pipe(filter ( name =>
      {
      if(name != "Hina")
      return true;
      else
      return false;
      }
    )
      ).subscribe(
        (name => console.log(name))
      )
    this.subscribeObject = this.observableService.getStudentList1.subscribe(
       {
        next : x => console.log(x),
        error : err => console.log(err) 
       }
     );   */

    
   /*   this.observableService.getStudentList.subscribe(this.observerVal); 
    setTimeout(() => {
      this.subscribeObject.unsubscribe();
    }, 10000); */

   /*  this.observableService.getNameFrom().subscribe(
      name => console.log(name)
    ) */
  }

}
