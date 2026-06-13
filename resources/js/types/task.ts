export type TaskStatus = 'todo' | 'in_progress' | 'done';

export type Task = {
    id: number;
    title: string;
    status: TaskStatus;
    created_at: string;
}