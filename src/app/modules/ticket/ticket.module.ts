import { NgModule } from '@angular/core';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './page/ticket.component';

import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    TicketComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    AsyncPipe,
    DatePipe,
    TicketRoutingModule
  ]
})
export class TicketModule { }
