import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { IndexComponent } from './index.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { IndexRoutingModule } from './index.routing';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    IndexComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
  ],
  exports: [ NavbarComponent, FooterComponent, IndexComponent ],
  providers: [],
})
export class IndexModule { }
