import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveAssignment';
  displayPara:boolean = false;
  btnMessage : string =  "Display Details";
  dataArray : string[] =[] ;
  idx : number = 0;
   data : string ;
   add() :void {
    this.dataArray.push(this.data);
    this.data = "";
   }
   display ()
  {
    
    if(this.btnMessage === "Display Details" )
    {
    this.displayPara = true ;
    this.btnMessage = "Hide Details";
    }
    else
    {
     this.displayPara = false ;
    this.btnMessage = "Display Details";
    }

  }
}
