import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    TableModule,
    TabMenuModule,
    ChartModule
  ],
  exports: [
    ButtonModule,
    TableModule,
    TabMenuModule,
    ChartModule
  ]
})
export class PrimeModule { }
