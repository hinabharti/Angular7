import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyForm1Component } from './my-form1/my-form1.component';
import { AssignmentCompComponent } from './assignment-comp/assignment-comp.component';
import { FormBuilderComponentComponent } from './form-builder-component/form-builder-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MyForm1Component,
    AssignmentCompComponent,
    FormBuilderComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
