 import { Component} from '@angular/core';

 @Component({
    selector: 'app-cal-component',
    template : ''
   
 })
export class CalculatorUtility
 {
   constructor()
   {
      console.log("calculator constructor invoked");
   }
  add(num1 : number , num2 :number):number
  {
    return (num1 + num2) ;
  }
  subtract(num1 : number , num2 :number):number
  {
    return (num1 - num2) ;
  }
  multiply(num1 : number , num2 :number):number
  {
    return (num1 * num2) ;
  }
  division(num1 : number , num2 :number):number
  {
    return (num1 / num2) ;
  }
 }
