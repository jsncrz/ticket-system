import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    TableModule,
    TabMenuModule,
  ],
  exports: [
    ButtonModule,
    TableModule,
    TabMenuModule,
  ]
})
export class PrimeModule { }
