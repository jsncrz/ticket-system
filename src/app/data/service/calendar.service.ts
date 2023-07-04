import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseService } from '@core/base.service';
import {
    CalendarEvent,
} from 'angular-calendar';
import { CalendarItem } from '../schema/calendar-item';

@Injectable()
export class CalendarService extends BaseService {
    private calendar$: Subject<CalendarEvent[]> = new Subject();

    constructor(httpClient: HttpClient) {
        super(httpClient, 'tickets');
    }

    private refreshCalendar() {
        this.loading$.next(true);
        this.httpClient.get<CalendarItem[]>(`${this.resourceUrl}/calendar`)
            .subscribe({
                next: (calendarItems) => {
                    let calendarEvents: Array<CalendarEvent> = [];
                    calendarItems.forEach(calendar => {
                        calendarEvents.push({
                            title: calendar.title,
                            start: new Date(calendar.start),
                            end: new Date(calendar.end)
                        })
                    });
                    this.calendar$.next(calendarEvents);
                },
                error: () => {
                    this.calendar$.next([]);
                },
                complete: () => {
                    this.loading$.next(false);
                }
            });
    }

    getCalendar(): Subject<CalendarEvent[]> {
        this.refreshCalendar();
        return this.calendar$;
    }
}
