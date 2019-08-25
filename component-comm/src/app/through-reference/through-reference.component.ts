import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-through-reference',
  templateUrl: './through-reference.component.html',
  styleUrls: ['./through-reference.component.css']
})
export class ThroughReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  show = function()
  {
    alert("calling child from parent through reference of child");
  }
}
