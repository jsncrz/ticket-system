import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-ticket-add',
    templateUrl: './ticket-add.component.html',
    styleUrls: ['./ticket-add.component.scss']
})
export class TicketAddComponent {
    @Input() addTicketDialog: boolean = false;
    @Input() saving: boolean = false;
    @Output() close: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<any> = new EventEmitter();

    ticketForm: FormGroup;
    submitted: boolean = false;
    maxDate!: Date;

    constructor() {
        this.ticketForm = new FormGroup({
            Task: new FormControl('', [Validators.required]),
            StartTime: new FormControl('', [Validators.required]),
            EndTime: new FormControl({ value: '', disabled: true }, [Validators.required]),
        });
    }

    onHide(): void {
        this.ticketForm.reset();
    }

    hideAddTicketDialog(): void {
        this.close.emit();
    }

    addTicket(): void {
        this.save.emit(this.ticketForm.value);
    }

    setEndTime(startTime: Date): void {
        this.ticketForm.get('EndTime')?.enable();
        this.maxDate = new Date(startTime);
        this.maxDate.setTime(startTime.getTime() + (12 * 60 * 60 * 1000))
        let endTime: Date = new Date(startTime);
        endTime.setTime(startTime.getTime() + (1 * 60 * 60 * 1000));
        this.ticketForm.patchValue({ EndTime: endTime });
    }
}
