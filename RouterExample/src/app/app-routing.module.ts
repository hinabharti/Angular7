import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductEditComponent } from './admin-routing/product-edit/product-edit.component';
import { AuthGuardService } from './service/auth-guard.service';
import { NoPageComponent } from './no-page/no-page.component';


const routes: Routes = [
  {
    path :"",
    redirectTo :"home",
    pathMatch : "full",
  },
  {
    path :"\home",
    component : HomeComponent,
  },
  {
    path : "admin" ,loadChildren : "../app/admin-routing/admin.module#AdminModule"
  },
 /*  {
    path : "admin",
    component : AdminComponent,
    canActivate :[AuthGuardService],
    children :
    [
      {path : '', component : ProductsComponent },
      {path : 'productEdit/:id', component: ProductEditComponent}
    ]
  }, */
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : '**',
    component : NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
