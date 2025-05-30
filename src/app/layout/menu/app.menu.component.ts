import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'ts-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Tickets',
                items: [
                    { label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: ['/calendar'] },
                    { label: 'Tickets', icon: 'pi pi-fw pi-ticket', routerLink: ['/ticket'] },
                ]
            },
        ];
    }
}
