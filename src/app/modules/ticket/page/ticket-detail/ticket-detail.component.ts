import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '@schema/ticket';
import { TicketService } from '@service/ticket.service';
import { Subject } from 'rxjs';

interface TicketEditFlag {
    title: boolean;
    desc: boolean;
}

@Component({
    selector: 'ts-ticket-detail',
    templateUrl: './ticket-detail.component.html',
    styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

    ticket!: Ticket;
    loading$!: Subject<boolean>;
    ticketForm!: FormGroup;
    editFlag: TicketEditFlag;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private ticketService: TicketService) {
            this.editFlag = {
                desc: false,
                title: false
            }
         }

    ngOnInit(): void {

        const ticketId = this.route.snapshot.paramMap.get('id');
        this.loading$ = this.ticketService.isLoading();
        if (ticketId != null) {
            this.ticketService.getTicket(ticketId).subscribe((ticket) => {
                this.ticket = ticket;
                this.ticketForm = new FormGroup({
                    title: new FormControl(this.ticket.title, [Validators.required]),
                    description: new FormControl(this.ticket.description),
                    status: new FormControl(this.ticket.status, [Validators.required]),
                    priority: new FormControl(this.ticket.priority, [Validators.required]),
                });
            })
            return;
        }
    }
}
