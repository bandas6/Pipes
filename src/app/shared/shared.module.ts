import { NgModule } from '@angular/core';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
