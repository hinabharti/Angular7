import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {
  @Input()
  dataType : string = "";
  
  @Output()
  changetype = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  change()
  {
    this.changetype.emit("Teacher");
  }
}
