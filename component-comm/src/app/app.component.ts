import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-comm';
   type = "Student";
  changed(change:string)
  {
    this.type = change;
    alert("changed value is" + this.type);
  }
}
