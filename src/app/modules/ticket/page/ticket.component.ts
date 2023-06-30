import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';
import { Ticket } from 'src/app/data/schema/ticket';
import { TicketService } from 'src/app/data/service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
    tickets$!: Subject<Ticket[]>;
    loading$!: Subject<boolean>;
    saving$!: Subject<boolean>;
    addTicketDialog: boolean = false;

    constructor(private ticketService: TicketService) {

    }
    ngOnInit(): void {
        this.tickets$ = this.ticketService.getTickets();
        this.loading$ = this.ticketService.isLoading();
        this.saving$ = this.ticketService.isSaving();
    }

    addTicket(ticket: Ticket): void {
        this.ticketService.createTicket(ticket).subscribe(() => {
            this.addTicketDialog = false;
        });
    }

    showAddTicketDialog(): void {
        this.addTicketDialog = true;
    }

    hideAddTicketDialog(): void {
        this.addTicketDialog = false;
    }
}
