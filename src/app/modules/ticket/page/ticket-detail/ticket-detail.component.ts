import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '@schema/ticket';
import { TicketService } from '@service/ticket.service';

@Component({
    selector: 'ts-ticket-detail',
    templateUrl: './ticket-detail.component.html',
    styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

    ticket!: Ticket;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private ticketService: TicketService) { }

    ngOnInit(): void {

        const ticketId = this.route.snapshot.paramMap.get('id');
        if (ticketId != null) {
            this.ticketService.getTicket(ticketId).subscribe((ticket) => {
                this.ticket = ticket;
            })
            return;
        }
    }
}
