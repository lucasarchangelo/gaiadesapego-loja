import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { IndexComponent } from './index.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { IndexRoutingModule } from './index.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IndexComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    IndexRoutingModule,
  ],
  exports: [ NavbarComponent, FooterComponent, IndexComponent ],
  providers: [],
})
export class IndexModule { }
