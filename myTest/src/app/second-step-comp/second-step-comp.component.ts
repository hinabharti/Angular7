import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { DataModel } from '../model/dataModel.model';
@Component({
  selector: 'app-second-step-comp',
  templateUrl: './second-step-comp.component.html',
  styleUrls: ['./second-step-comp.component.css']
})
export class SecondStepCompComponent implements OnInit {
   
  @Output("clickEnable")
  clickEnable = new EventEmitter<string>();

  constructor(private dataService: DataServiceService) { }
  entity : DataModel[] = [];
  ngOnInit() {
    this.entity = this.dataService.getDataDetails();
    console.log(this.entity);
  }
  saveName (name : string)
  {
    alert(name +"is selected to resolve");
    this.clickEnable.emit(name);
  }
}
