import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  major : number = 1;
  minor :number = 23;
 
  newMinor() {
    this.minor++;
  }
 
  newMajor() : void
  {
    ++this.major;
  }
}
