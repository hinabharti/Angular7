import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowHideDirectiveDirective } from './show-hide-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowHideDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
