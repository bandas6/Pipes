import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


//Modulo per 
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


//cambiar el locale de la app

import localeEsCo from '@angular/common/locales/es-CO';
import localeFrCa from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsCo);

//PrimeNG

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule,
    CommonModule,
    VentasModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    {provide:LOCALE_ID,useValue: 'es-CO'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
