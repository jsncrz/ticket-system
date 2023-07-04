import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    {
                      path: '',
                      loadChildren: () =>
                        import('./modules/home/home.module').then(m => m.HomeModule)
                    },
                    {
                      path: 'ticket',
                      loadChildren: () =>
                        import('./modules/ticket/ticket.module').then(m => m.TicketModule)
                    },
                    {
                      path: 'calendar',
                      loadChildren: () =>
                        import('./modules/calendar/calendar.module').then(m => m.CalendarModule)
                    },
                ]
            },
            // { path: 'notfound', component: NotfoundComponent },
            // { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
