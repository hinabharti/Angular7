import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabModule} from 'angular-tabs-component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchwizardModule } from 'angular-archwizard';
import { FirstStepCompComponent } from './first-step-comp/first-step-comp.component';
import { ChartsModule } from 'ng2-charts';
import { SecondStepCompComponent } from './second-step-comp/second-step-comp.component';
import { ThirdStepCompComponent } from './third-step-comp/third-step-comp.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FirstStepCompComponent,
    SecondStepCompComponent,
    ThirdStepCompComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule,
    TabModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
