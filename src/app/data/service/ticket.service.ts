import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Ticket } from '../schema/ticket';
import { BaseService } from 'src/app/core/base.service';

@Injectable()
export class TicketService extends BaseService {
    private tickets$: Subject<Ticket[]> = new Subject();

    constructor(httpClient: HttpClient) {
        super(httpClient);
     }

    private refreshTickets() {
        this.loading$.next(true);
        this.httpClient.get<Ticket[]>(`${this.url}/tickets`)
            .subscribe({
                next: (tickets) => {
                    this.tickets$.next(tickets);
                },
                error: () => {
                    this.tickets$.next([]);
                },
                complete: () => {
                    this.loading$.next(false);
                 }
            });
    }

    getTickets(): Subject<Ticket[]> {
        this.refreshTickets();
        return this.tickets$;
    }

    getTicket(id: string): Observable<Ticket> {
        return this.httpClient.get<Ticket>(`${this.url}/tickets/${id}`);
    }

    createTicket(ticket: Ticket): Observable<string> {
        return this.httpClient.post(`${this.url}/tickets`, ticket, { responseType: 'text' });
    }

    updateTicket(id: string, ticket: Ticket): Observable<string> {
        return this.httpClient.put(`${this.url}/tickets/${id}`, ticket, { responseType: 'text' });
    }

    deleteTicket(id: string): Observable<string> {
        return this.httpClient.delete(`${this.url}/tickets/${id}`, { responseType: 'text' });
    }
}