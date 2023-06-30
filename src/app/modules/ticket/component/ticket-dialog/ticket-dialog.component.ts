import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket, TicketPriority, TicketStatus, getTicketPriorityLabel, getTicketStatusLabel } from '@schema/ticket';
import { SelectUtil } from '@shared/utils/select-util';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'ts-ticket-dialog',
    templateUrl: './ticket-dialog.component.html',
    styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketAddDialogComponent {
    @Input() ticket!: Ticket | null;
    @Input() addTicketDialog: boolean = false;
    @Input() saving: boolean = false;
    @Output() closeDialog: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<any> = new EventEmitter();

    ticketForm!: FormGroup;
    submitted: boolean = false;
    maxDate!: Date;
    status: SelectItem[] = [];
    priority: SelectItem[] = [];

    constructor() {
        this.initFormGroup();
        this.status = SelectUtil.getSelectFromEnum(TicketStatus, getTicketStatusLabel);
        this.priority = SelectUtil.getSelectFromEnum(TicketPriority, getTicketPriorityLabel);
    }
    initFormGroup(): void {
        this.ticketForm = new FormGroup({
            title: new FormControl('', [Validators.required]),
            description: new FormControl(''),
            status: new FormControl(TicketStatus.New, [Validators.required]),
            priority: new FormControl(TicketPriority.Low, [Validators.required]),

            // startTime: new FormControl('', [Validators.required]),
            // EndTime: new FormControl({ value: '', disabled: true }, [Validators.required]),
        });
    }

    onHide(): void {
        this.initFormGroup();
    }

    onShow(): void {
        if (this.ticket != null) {
            this.ticketForm = new FormGroup({
                title: new FormControl(this.ticket.title, [Validators.required]),
                description: new FormControl(this.ticket.description),
                status: new FormControl(this.ticket.status, [Validators.required]),
                priority: new FormControl(this.ticket.priority, [Validators.required]),
            });
        } else {
            this.initFormGroup();
        }
    }

    hideAddTicketDialog(): void {
        this.closeDialog.emit();
    }

    addTicket(): void {
        if (this.ticket != null) {
            this.save.emit({ ...this.ticket, ...this.ticketForm.value });
        } else {
            this.save.emit(this.ticketForm.value);
        }
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
