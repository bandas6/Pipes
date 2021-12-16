import { NgModule } from '@angular/core';

import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputNumberModule } from 'primeng/inputnumber';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';





@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    InputNumberModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNGModule { }
