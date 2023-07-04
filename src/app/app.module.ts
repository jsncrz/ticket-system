import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarService } from './data/service/calendar.service';
import { DashboardService } from './data/service/dashboard.service';
import { TicketService } from './data/service/ticket.service';
import { AppLayoutModule } from './layout/app.layout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        SharedModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        TicketService,
        DashboardService,
        CalendarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
