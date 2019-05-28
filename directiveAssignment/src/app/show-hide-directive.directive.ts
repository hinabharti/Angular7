import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appShowHideDirective]'
})
export class ShowHideDirectiveDirective {

  // @Input('appShowHideDirective') showHide : boolean ;
  constructor(private element : ElementRef) 
  {
    
   }
   
  @Input('appShowHideDirective')
  set showHide(status: boolean) {
    this.showHidePara(status);
  }
   
   showHidePara(status : boolean) : void
   {
     if(status)
     {
      this.element.nativeElement.style.display =  "none";
     }
     else{
      this.element.nativeElement.style.display = "block";
     }
   }
}
