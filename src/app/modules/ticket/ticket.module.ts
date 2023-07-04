import { NgModule } from '@angular/core';

import { TicketComponent } from './page/ticket.component';
import { TicketRoutingModule } from './ticket-routing.module';

import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TicketAddComponent } from './page/ticket-add/ticket-add.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        TicketComponent,
        TicketAddComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,

        // PrimeNG Module
        ToastModule,
        ToolbarModule,
        ButtonModule,
        TableModule,
        DialogModule,
        FormsModule,
        InputTextModule,
        CalendarModule,

        // Pipes
        DatePipe,
        TicketRoutingModule
    ]
})
export class TicketModule { }
