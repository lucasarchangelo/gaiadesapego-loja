import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductFormComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  exports: [AdminComponent],
  providers: [],
})
export class AdminModule { }
