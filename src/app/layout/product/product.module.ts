import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';
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
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forChild(ProductRoutes),
  ],
  exports: [ProductComponent],
  providers: [],
})
export class ProductModule { }
