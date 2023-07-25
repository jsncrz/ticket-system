import { CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Ticket, TicketPriority, TicketStatus } from '@schema/ticket';

@Component({
    selector: 'ts-ticket-board',
    templateUrl: './ticket-board.component.html',
    styleUrls: ['./ticket-board.component.scss']
})
export class TicketBoardComponent implements OnChanges {
    TicketStatus = TicketStatus
    TicketPriority = TicketPriority

    @Input() tickets!: Ticket[];
    @Input() saving!: boolean;
    @Input() loading!: boolean;
    @Output() movedTicket: EventEmitter<Ticket> = new EventEmitter();
    @Output() clickedTicket: EventEmitter<Ticket> = new EventEmitter();

    dragging: boolean = false;
    newTickets: Ticket[] = [];
    inProgressTickets: Ticket[] = [];
    testingTickets: Ticket[] = [];
    completedTickets: Ticket[] = [];
    draggedTicket: Ticket | undefined | null;
    draggedStatus: TicketStatus | undefined | null;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('tickets')) {
            if (changes['tickets'].isFirstChange()) {
            } else {
                this.moveTicketsToStatusColumn();
            }
        }
    }

    moveTicketsToStatusColumn() {
        this.newTickets = [];
        this.inProgressTickets = [];
        this.testingTickets = [];
        this.completedTickets = [];
        this.tickets.forEach(ticket => {
            switch (ticket.status) {
                case TicketStatus.New:
                    this.newTickets.push(ticket);
                    break;
                case TicketStatus.InProgress:
                    this.inProgressTickets.push(ticket);
                    break;
                case TicketStatus.Testing:
                    this.testingTickets.push(ticket);
                    break;
                case TicketStatus.Completed:
                    this.completedTickets.push(ticket);
                    break;
                default:
            }
        });
    }

    onDrop(event: CdkDragDrop<Ticket[]>, status: TicketStatus): void {
        if (event.previousContainer === event.container && event.previousIndex === event.currentIndex) {
            return;
        }
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
            event.container.data[event.currentIndex].status = status;
        }
        this.computePosition(event.container.data, event.currentIndex);
        this.movedTicket.emit(event.container.data[event.currentIndex]);
    }

    computePosition(tickets: Ticket[], index: number): void {
        let currentTicket = tickets[index];
        if (tickets.length > 1) {
            if(index === 0) {
                currentTicket.position = tickets[1].position - 1000;
            } else if (index === tickets.length - 1) {
                currentTicket.position = tickets[index-1].position + 1000;
            } else {
                currentTicket.position = Math.trunc((tickets[index+1].position + tickets[index-1].position) / 2);
            }
        } else {
            currentTicket.position = 0;
        }

    }

    handleDragStart(event: CdkDragStart): void {
        console.log(event);
        this.dragging = true;
    }

    handleDragEnd(event: CdkDragStart): void {
        this.dragging = false;
    }

    handleClick(ticket: Ticket): void {
        if (this.dragging) {
            this.dragging = false;
            return
        }
        this.clickedTicket.emit(ticket);
    }

}
