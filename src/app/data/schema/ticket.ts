export enum TicketStatus {
    New,
    InProgress,
    Testing,
    Completed,
}

export enum TicketPriority {
    VeryLow,
    Low,
    Medium,
    High,
    Critical
}

export function getTicketPriorityLabel(priorityValue: number): string {
    switch (priorityValue) {
        case TicketPriority.VeryLow.valueOf():
            return 'Very Low';
        case TicketPriority.Low.valueOf():
            return 'Low';
        case TicketPriority.Medium.valueOf():
            return 'Medium';
        case TicketPriority.High.valueOf():
            return 'High';
        case TicketPriority.Critical.valueOf():
            return 'Critical';
        default:
            return '';
    }
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
    description: string;
    status: TicketStatus;
    priority: TicketPriority;
    tasks: Task[];
    position: number;
}
