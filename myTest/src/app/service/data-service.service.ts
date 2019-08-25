import { Injectable } from '@angular/core';
import { DataModel } from '../model/dataModel.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  data : DataModel[] = [];
  getDataDetails() : DataModel[]
  {
    
    let data1 = new DataModel("PC - 1","Windows 7","192.45.465.67","Jhon Snow","10:00 AM","9:00 PM");
    let data2 = new DataModel("PC - 2","Windows 8","192.45.465.67","Jhon Snow","10:00 AM","9:00 PM");
    let data3 = new DataModel("PC - 3","Windows 10","192.45.67.67","Jhon Snow","10:00 AM","9:00 PM");
    let data4 = new DataModel("PC - 4","Windows 7","192.45.465.67","Jhon Snow","10:00 AM","9:00 PM");
    let data5 = new DataModel("PC - 5","Windows 7","192.14.465.67","Jhon Snow","10:00 AM","9:00 PM");
    let data6 = new DataModel("PC - 6","Windows 8","192.45.465.40","Jhon Snow","10:00 AM","9:00 PM");
    let data7 = new DataModel("PC - 7","Windows 7","197.45.345.67","Jhon Snow","10:00 AM","9:00 PM");
    let data8 = new DataModel("PC - 8","Windows 10","192.56.465.67","Jhon Snow","10:00 AM","9:00 PM");
    let data9 = new DataModel("PC - 9","Windows 7","192.78.465.89","Jhon Snow","10:00 AM","9:00 PM");
    this.data.push(data1);
    this.data.push(data2);
    this.data.push(data3);
    this.data.push(data4);
    this.data.push(data5);
    this.data.push(data6);
    this.data.push(data7);
    this.data.push(data8);
    this.data.push(data9);
    return this.data;
  }
}
