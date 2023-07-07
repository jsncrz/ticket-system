export enum TicketStatus {
    New,
    InProgress,
    Testing,
    Completed,
}

export function getTicketStatusLabel(statusValue: number): string {
    switch (statusValue) {
        case TicketStatus.New.valueOf():
            return 'New';
        case TicketStatus.InProgress.valueOf():
            return 'In Progress';
        case TicketStatus.Testing.valueOf():
            return 'Testing';
        case TicketStatus.Completed.valueOf():
            return 'Completed';
        default:
            return '';
    }
}
export interface Ticket {
    id: string;
    title: string;
    status: TicketStatus;
    tasks: Task[];
    position: number;
}
