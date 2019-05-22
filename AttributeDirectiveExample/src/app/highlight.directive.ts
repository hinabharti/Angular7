import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor : string ;
  @HostListener('mouseenter') onMouseEnter()
  {
    
   this.highlight(this.highlightColor || "yellow");
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.highlight(null);
  }

 highlight(color: string) {
    this.e1.nativeElement.style.backgroundColor = color;
  }

  constructor(private e1 : ElementRef) { 
      
  } 

}
