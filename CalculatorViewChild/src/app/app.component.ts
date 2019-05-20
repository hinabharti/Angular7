import { Component, ViewChild, ElementRef } from '@angular/core';
import { readElementValue } from '@angular/core/src/render3/util';
import { CalculatorUtility } from './calculatorUtility.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  @ViewChild("input1")
  input1 : ElementRef;
  
  @ViewChild("input2")
  input2 : ElementRef;

  @ViewChild(CalculatorUtility)
  CalculatorUtility : CalculatorUtility ;
  i1 : number;
  i2 : number;

  readValue()
  {
    this.i1 =Number(this.input1.nativeElement.value);
    this.i2 =Number(this.input2.nativeElement.value);
  }

  clearValue()
  {
    this.input1.nativeElement.value = "";
    this.input2.nativeElement.value = "";
  }
  add() : void
  {      
        this.readValue();
        alert(this.CalculatorUtility.add(this.i1,this.i2));
        this.clearValue();   
  }

  subtract () : void
  {
        this.readValue();
        alert(this.CalculatorUtility.subtract(this.i1,this.i2));
        this.clearValue();
  }
  
  multiply () : void 
  {
        this.readValue();
        alert(this.CalculatorUtility.multiply(this.i1,this.i2));
        this.clearValue();
  }

  division () : void
  {
        this.readValue();
        alert(this.CalculatorUtility.division(this.i1,this.i2));
        this.clearValue();
  }

}
