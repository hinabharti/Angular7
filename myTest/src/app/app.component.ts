import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTest';
  thirdStepNextFlag : boolean = true ;
  fourStepNextFlag : boolean = true;
  getFlagForThirdStep(name : string)
  {
    if(name != undefined)
    {
      this.thirdStepNextFlag = false;
    }
  }
  getFlagForFourthStep(flag : boolean)
  {
    if(flag)
    {
      this.fourStepNextFlag = false;
    }
  }
}
