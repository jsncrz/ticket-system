import { Component } from '@angular/core';
import { AsyncSubject, Observable, Subject } from 'rxjs';
import { Ticket } from 'src/app/data/schema/ticket';
import { TicketService } from 'src/app/data/service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent {
    tickets$: Subject<Ticket[]> = new AsyncSubject();
    loading$: Subject<boolean> = new AsyncSubject();

    constructor(private ticketService: TicketService) {

    }
    ngOnInit(): void {
        this.tickets$ = this.ticketService.getTickets();
        this.loading$ = this.ticketService.isLoading();
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
}
