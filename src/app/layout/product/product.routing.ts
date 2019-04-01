import { Routes } from "@angular/router";
import { IndexComponent } from 'src/app/index/index.component';

export const ProductRoutes: Routes = [
  {
    path: 'products',
    children: [
        {
            path: "",
            component: IndexComponent,
        },
        // {
        //     path: 'all-products',
        //     component: ProductListComponent
        // },
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
