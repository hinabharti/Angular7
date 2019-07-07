import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})

export class InquiryEmployeeService {
  
  appURL : string = "http://localhost:3000/EmployeeDetails";
  constructor(private httpClient : HttpClient) { }

  getEmployeeDetails() : Observable<Employee[]>
  {
       return this.httpClient.get<Employee[]>(this.appURL);
  }
  
  getEmployeeDetailsByID(id:number) : Observable<Employee>
  {
    return this.httpClient.get<Employee>(this.appURL+"/"+id);
  }
  updateEmployeeDetails(employee:Employee) :Observable<Employee>
  {
    return this.httpClient.put<Employee>(this.appURL+"/"+employee.id,employee);
  }
  delete(id:number):Observable<any>
  {
    return this.httpClient.delete(this.appURL+"/"+id);
  }
  saveEmployeeDetails(employee:Employee) :Observable<Employee>
  {
    return this.httpClient.post<Employee>(this.appURL+"/",employee);
  }
}
