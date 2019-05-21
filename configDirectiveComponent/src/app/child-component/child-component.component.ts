import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() {
    
   }
  @Input()
  major : number;

  @Input("major")
  m : number ;

  ngOnInit() {
    console.log("ngOnit");
  }

}
