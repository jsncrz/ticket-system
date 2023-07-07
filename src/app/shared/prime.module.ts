import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { SpeedDialModule } from 'primeng/speeddial';
import { BadgeModule } from 'primeng/badge';

@NgModule({
    declarations: [],
    imports: [
        ButtonModule,
        TableModule,
        TabMenuModule,
        ChartModule,
        ToastModule,
        ToolbarModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        CalendarModule,
        DropdownModule,
        SpeedDialModule,
        BadgeModule
    ],
    exports: [
        ButtonModule,
        TableModule,
        TabMenuModule,
        ChartModule,
        ToastModule,
        ToolbarModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        CalendarModule,
        DropdownModule,
        SpeedDialModule,
        BadgeModule
    ],
})
export class PrimeModule {}
