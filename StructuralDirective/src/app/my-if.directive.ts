import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private containeRef : ViewContainerRef,private templateRef : TemplateRef<any>)
   {
     console.log("MyIf");
    }
  
  @Input("appMyIf")
  set myIF(stage : boolean)
  {
    if(stage)
    {
       this.containeRef.createEmbeddedView(this.templateRef);
    }
  }
}

