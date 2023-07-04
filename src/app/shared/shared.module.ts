import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarHeaderComponent } from './component/calendar-header/calendar-header.component';
import { PrimeModule } from './prime.module';

import { CalendarModule as AngularCalendar, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
    declarations: [
        CalendarHeaderComponent
    ],
    imports: [
        PrimeModule,

        AngularCalendar.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),

        AsyncPipe
    ],
    exports: [
        PrimeModule,
        AngularCalendar,
        AsyncPipe,
        CalendarHeaderComponent,
    ]
})
export class SharedModule { }
