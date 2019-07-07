import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {
    path :"",
    redirectTo :"\home",
    pathMatch : "full",
  },
  {
    path :"\home",
    component : HomeComponent,
  },
  {
    path : "admin",
    component : AdminComponent,
    canActivate :[AuthGuardService],
    children :
    [
      {path : '', component : ProductsComponent },
      {path : 'productEdit/:id', component: ProductEditComponent}
    ]
  },
  {
    path : "login",
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
