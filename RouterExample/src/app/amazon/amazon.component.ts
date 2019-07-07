import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

  constructor(private location :Location) { }

  ngOnInit() {
  }
   back() :void{
    this.location.back();
  }  
}
