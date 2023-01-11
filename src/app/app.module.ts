import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModule } from './contador/contador.modulo';
import { DanganronpaModule } from './danganronpa/danganronpa.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DanganronpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
