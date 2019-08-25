import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations : [
    trigger('fade',[
      transition('void => *',[
        style({backgroundColor :'yellow',opacity:0}),
        animate(2000,style({backgroundColor :'white',opacity:0}))
      ])
    ])
  ]
})
export class TodosComponent implements OnInit {
  items : any[] = [
    "wash the dishes",
    "call the accountant",
    "apply for a car insurance"
  ];

  constructor() { }

  ngOnInit() {
  }

}
