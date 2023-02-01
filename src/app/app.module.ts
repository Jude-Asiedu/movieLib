import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './mainpage/page404/page404.component';
import { NavbarComponent } from './mainpage/home/homepage/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
