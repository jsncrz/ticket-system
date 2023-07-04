enum Status {
	StatusNew,
	StatusInProgress,
	StatusTesting,
	StatusCompleted,
}
export interface Ticket {
    name?: string;
    status?: Status;
    tasks?: Task[];
}
