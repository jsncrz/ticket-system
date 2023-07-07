import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeModule } from './prime.module';

import { CalendarModule as AngularCalendar, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { DragDropModule } from '@angular/cdk/drag-drop';

// Components
import { CalendarHeaderComponent } from './component/calendar-header/calendar-header.component';

@NgModule({
    declarations: [
        CalendarHeaderComponent
    ],
    imports: [
        PrimeModule,
        DragDropModule,

        AngularCalendar.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),

        AsyncPipe
    ],
    exports: [
        PrimeModule,
        DragDropModule,
        AngularCalendar,
        AsyncPipe,
        CalendarHeaderComponent,
    ]
})
export class SharedModule { }
