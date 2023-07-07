import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Ticket, TicketStatus } from '@schema/ticket';
import { CdkDragStart, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'ts-ticket-board',
    templateUrl: './ticket-board.component.html',
    styleUrls: ['./ticket-board.component.scss']
})
export class TicketBoardComponent implements OnChanges {
    TicketStatus = TicketStatus

    @Input() tickets!: Ticket[];
    @Output() movedTicket: EventEmitter<Ticket> = new EventEmitter();

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
                currentTicket.position = Math.trunc(tickets[index+1].position + tickets[index-1].position / 2);
            }
        } else {
            currentTicket.position = 0;
        }

    }

    handleDragStart(event: CdkDragStart): void {
        this.dragging = true;
    }

    handleClick(event: MouseEvent): void {
        if (this.dragging) {
            this.dragging = false;
            return
        }
        alert('clicked!');
    }

}
