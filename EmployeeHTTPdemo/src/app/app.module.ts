import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './inquiry/employee-details/employee-details.component';
import { InquiryEmployeeService } from './inquiry/inquiry-employee.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorServiceService } from './service/http-interceptor-service.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InquiryEmployeeService,
              HttpClientModule,
              HttpInterceptorServiceService,
              {
                provide : HTTP_INTERCEPTORS,
                useClass : HttpInterceptorServiceService,
                multi : true
              }            
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
