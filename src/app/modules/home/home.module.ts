import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { MonthlyTicketPieComponent } from './component/monthly-ticket-pie/monthly-ticket-pie.component';


@NgModule({
    declarations: [
        HomeComponent,
        MonthlyTicketPieComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
