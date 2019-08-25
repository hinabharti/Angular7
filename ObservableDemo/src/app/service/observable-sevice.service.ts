import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Student } from '../model/student.model';
import { map, filter } from 'rxjs/operators';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
@Injectable({
  providedIn: 'root'
})
export class ObservableSeviceService {

  studentList : Student [] = [];
  constructor() { }

  ngOnInit() {
    let student1 =  new Student(1,"Hina");
    let student2 = new Student(2,"Aman");
    let student3 = new Student(3,"Shanky");
    this.studentList.push(student1,student2,student3);
  }
  getIdOF() : Observable<String>
  {
    var ids = ["1","2","3","4"];
   // return of(["1","2","3","4"]);
   return of("1","2","3","4");
  }
  getNameFrom() : Observable<String>
  {
    return from(["Hina","Aman","Shubh","Shital"]);
  }

   getStudentList1 =  new Observable(
     (observer) =>
     {
     observer.next("Next");
     setTimeout(() => {
       observer.error("error");
     },5000); 
     return {unsubscribe()
      {
        console.log("unsubscribe");
      }
     }
    }
   )
   
   getStudentList() : Observable <Student>
   {
    return of(new Student(1,"Hina"),new Student(2,"Aman"),new Student(3,"Shanky"));
    }

  disp() : Observable <Student> {
    return  this.getStudentList().pipe(
      filter (names =>
      {
       if(names.id == 2)
       {
          return false;
       }
       return true;
      }),
      map(name =>{
         name.id = name.id + 2;
        return name;})

      );
  }  
}
