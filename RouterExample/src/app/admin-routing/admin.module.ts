import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductsComponent],
    //  ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingRoutingModule
  //  ProductEditComponent
  ]
})
export class AdminModule { }
