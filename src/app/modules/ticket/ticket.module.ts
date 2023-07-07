import { NgModule } from '@angular/core';

import { TicketComponent } from './page/ticket.component';
import { TicketRoutingModule } from './ticket-routing.module';

import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketAddComponent } from './page/ticket-add/ticket-add.component';
import { SharedModule } from '@shared/shared.module';
import { TicketBoardComponent } from './page/ticket-board/ticket-board.component';

@NgModule({
    declarations: [
        TicketComponent,
        TicketAddComponent,
        TicketBoardComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        FormsModule,

        // PrimeNG Module

        // Pipes
        DatePipe,
        TicketRoutingModule
    ]
})
export class TicketModule { }
