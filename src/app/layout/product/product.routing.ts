import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from 'src/app/index/index.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const productRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
        {
            path: "",
            component: ListProductsComponent,
            outlet: 'productSection'            
        },
        {
          path: "oi",
          component: ProductDetailComponent,
          outlet: 'productSection'            
        },
        // {
        //     path: 'favourite-products',
        //     component: FavouriteProductsComponent
        // },
        // {
        //     path: 'cart-items',
        //     component: CartProductsComponent
        // },
        // {
        //     path: 'checkouts',
        //     loadChildren: './checkout/checkout.module#CheckoutModule'
        // },
        // {
        //     path: 'product/:id',
        //     component: ProductDetailComponent
        // }
    ]
  },
];

@NgModule({
	imports: [ RouterModule.forChild(productRoutes) ],
	exports: [ RouterModule ]
})
export class ProductRoutingModule {}
