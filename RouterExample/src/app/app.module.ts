import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AmazonComponent } from './amazon/amazon.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NoPageComponent } from './no-page/no-page.component';
import { AdminModule } from './admin-routing/admin.module';
import { AdminCompoComponent } from './admin-routing/admin-compo/admin-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    AmazonComponent,
    AdminCompoComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor()
  {
    console.log("app module loaded");
  }
 }
