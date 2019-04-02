import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index.component";
import { NgModule } from '@angular/core';

export const indexRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: IndexComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ]
  }
];

@NgModule({
	imports: [ RouterModule.forChild(indexRoutes) ],
	exports: [ RouterModule ]
})
export class IndexRoutingModule {}
