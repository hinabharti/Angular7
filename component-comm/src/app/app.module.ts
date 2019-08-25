import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { ThroughReferenceComponent } from './through-reference/through-reference.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDropdownComponent,
    ThroughReferenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
