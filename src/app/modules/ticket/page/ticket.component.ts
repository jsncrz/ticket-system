import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Ticket } from '@schema/ticket';
import { TicketService } from '@service/ticket.service';

@Component({
    selector: 'ts-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
    tickets$!: Subject<Ticket[]>;
    clickedTicket!: Ticket | null ;
    loading$!: Subject<boolean>;
    saving$!: Subject<boolean>;
    addTicketDialog: boolean = false;

    constructor(private ticketService: TicketService) {

    }
    ngOnInit() {
        this.tickets$ = this.ticketService.getTickets();
        this.loading$ = this.ticketService.isLoading();
        this.saving$ = this.ticketService.isSaving();
    }

    addTicket(ticket: Ticket): void {
        if (this.clickedTicket != null) {
            this.ticketService.updateTicket(ticket.id, ticket).subscribe(() => {
                this.addTicketDialog = false;
                this.clickedTicket = null;
            });
        } else {
            this.ticketService.createTicket(ticket).subscribe(() => {
                this.addTicketDialog = false;
            });
        }
    }

    showAddTicketDialog(): void {
        this.addTicketDialog = true;
    }

    hideAddTicketDialog(): void {
        this.clickedTicket = null;
        this.addTicketDialog = false;
    }

    ticketMoved(ticket: Ticket): void {
        this.ticketService.updateTicket(ticket.id, ticket).subscribe();
    }

    ticketClicked(ticket: Ticket): void {
        this.clickedTicket = ticket;
        this.addTicketDialog = true;
    }
}
