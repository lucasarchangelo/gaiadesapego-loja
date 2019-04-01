import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forChild(ProductRoutes),
  ],
  exports: [],
  providers: [],
})
export class ProductModule { }
