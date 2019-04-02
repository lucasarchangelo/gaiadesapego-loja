import { Routes } from "@angular/router";
import { IndexComponent } from 'src/app/index/index.component';
import { ProductComponent } from './product.component';

export const ProductRoutes: Routes = [
  {
    path: 'products',
    children: [
        {
            path: "",
            component: ProductComponent,
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
  }
];
