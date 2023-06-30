import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { BaseService } from '@core/base.service';
import { MonthlyCount } from '@schema/dashboard';

@Injectable()
export class DashboardService extends BaseService {

    monthlyCount$: Subject<MonthlyCount[]> = new Subject();

    constructor(httpClient: HttpClient) {
        super(httpClient, 'dashboard');
    }

    getMonthlyCount(): void {
        this.loading$.next(true);
        this.httpClient.get<MonthlyCount[]>(`${this.resourceUrl}/tickets/monthly`)
            .subscribe({
                next: (data: MonthlyCount[]) => {
                    this.monthlyCount$.next(data);
                },
                error: () => {
                    this.monthlyCount$.next([]);
                },
                complete: () => {
                    this.loading$.next(false);
                }
            });
    }

}
