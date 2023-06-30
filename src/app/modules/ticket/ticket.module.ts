import { NgModule } from '@angular/core';

import { TicketRoutingModule } from './ticket-routing.module';

import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { TicketAddDialogComponent } from './component/ticket-dialog/ticket-dialog.component';
import { TicketBoardComponent } from './component/ticket-board/ticket-board.component';
import { TicketDetailComponent } from './page/ticket-detail/ticket-detail.component';
import { TicketComponent } from './page/ticket.component';

@NgModule({
    declarations: [
        TicketComponent,
        TicketAddDialogComponent,
        TicketBoardComponent,
        TicketDetailComponent,
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
