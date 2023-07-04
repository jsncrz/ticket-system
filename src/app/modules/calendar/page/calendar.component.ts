import { Component, OnInit } from '@angular/core';

import {
    CalendarEvent,
    CalendarMonthViewDay,
    CalendarView
} from 'angular-calendar';
import { Subject } from 'rxjs';
import { CalendarService } from '@service/calendar.service';

@Component({
    selector: 'ts-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    calendar$!: Subject<CalendarEvent[]>;
    loading$!: Subject<boolean>;

    view: CalendarView = CalendarView.Month;
    viewDate: Date = new Date();
    activeDayIsOpen: boolean = false;


    constructor(private calendarService: CalendarService) {

    }
    ngOnInit() {
        this.calendar$ = this.calendarService.getCalendar();
        this.loading$ = this.calendarService.isLoading();
    }

    monthDayClicked(event: CalendarMonthViewDay) {
        this.viewDate = event.date;
        this.activeDayIsOpen = true;
    }
    eventClicked(event: any) {
        console.log(event);
    }
}
