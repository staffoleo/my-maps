import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';

import { ShopService } from './shop/shop.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAYzgl1XQ4V9I1BOa40OIGhXKrNmzcl0BY '
    })
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
