import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, tap } from 'rxjs';
import { Ticket } from '../schema/ticket';
import { BaseService } from '@core/base.service';

@Injectable()
export class TicketService extends BaseService {
    private tickets$: Subject<Ticket[]> = new Subject();

    constructor(httpClient: HttpClient) {
        super(httpClient, 'tickets');
    }

    private refreshTickets() {
        this.loading$.next(true);
        this.httpClient.get<Ticket[]>(`${this.resourceUrl}`)
            .subscribe({
                next: (tickets) => {
                    this.tickets$.next(tickets);
                },
                error: (err) => {
                    console.error(err);
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
        this.loading$.next(true);
        return this.httpClient.get<Ticket>(`${this.resourceUrl}/${id}`)
            .pipe(map((ticket) => {
                this.loading$.next(false);
                return ticket;
            }));
    }

    createTicket(ticket: Ticket): Observable<string> {
        this.saving$.next(true);
        return this.httpClient.post(`${this.resourceUrl}`, ticket, { responseType: 'text' })
            .pipe(map((ticket) => {
                this.saving$.next(false);
                this.refreshTickets();
                return ticket;
            }));
    }

    updateTicket(id: string, ticket: Ticket): Observable<string> {
        this.saving$.next(true);
        return this.httpClient.put(`${this.resourceUrl}/${id}`, ticket, { responseType: 'text' })
            .pipe(map((ticket) => {
                this.saving$.next(false);
                this.refreshTickets();
                return ticket;
            }));;
    }

    deleteTicket(id: string): Observable<string> {
        return this.httpClient.delete(`${this.resourceUrl}/${id}`, { responseType: 'text' });
    }
}
