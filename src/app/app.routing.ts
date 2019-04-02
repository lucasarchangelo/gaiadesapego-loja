import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				loadChildren: './index/index.module#IndexModule'
			},
			{
				path: 'product',
				loadChildren: './layout/product/product.module#ProductModule',
			},
		]
	},
];
