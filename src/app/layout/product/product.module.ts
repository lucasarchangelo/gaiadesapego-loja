import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product.routing';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent,
    ListProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  exports: [ProductComponent],
  providers: [],
})
export class ProductModule { }
