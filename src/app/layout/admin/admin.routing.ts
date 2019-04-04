import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from 'src/app/index/index.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // path: 'admin',
    // component: ProductComponent,
    // children: [
    //     {
    //         path: "",
    //         component: ListProductsComponent,
    //         outlet: 'productSection'            
    //     },
    //     {
    //       path: "oi",
    //       component: ProductDetailComponent,
    //       outlet: 'productSection'            
    //     },
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
  },
];

@NgModule({
	imports: [ RouterModule.forChild(adminRoutes) ],
	exports: [ RouterModule ]
})
export class AdminRoutingModule {}
