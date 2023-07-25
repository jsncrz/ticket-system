import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Subject } from 'rxjs';
import { DashboardService } from '@service/dashboard.service';
import { MonthlyCount } from '@schema/dashboard';
import { DateUtil } from '@shared/utils/date-util';

@Component({
    selector: 'ts-monthly-ticket-pie',
    templateUrl: './monthly-ticket-pie.component.html',
    styleUrls: ['./monthly-ticket-pie.component.scss']
})
export class MonthlyTicketPieComponent implements OnInit {
    data!: ChartData;
    options!: ChartOptions;
    loading$!: Subject<boolean>;
    constructor(private service: DashboardService) {
    }

    ngOnInit(): void {
        this.initData();
        this.initOptions();
    }

    initData(): void {
        this.loading$ = this.service.isLoading();
        this.service.getMonthlyCount();
        this.service.monthlyCount$
            .subscribe((monthlyCount: MonthlyCount[]) => {
                this.data = { labels: [], datasets: [] };
                let dataset: { data: number[] } = { data: [] };
                monthlyCount.forEach(count => {
                    this.data.labels?.push(DateUtil.getMonthName(count.yearMonth.month));
                    dataset.data.push(count.numberOfTickets);
                });
                this.data.datasets.push(dataset);
            })
    }

    initOptions(): void {
        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                    }
                }
            }
        };

    }
}
