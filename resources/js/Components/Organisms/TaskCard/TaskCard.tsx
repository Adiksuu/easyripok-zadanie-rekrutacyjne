import { Task } from '@/types/task';
import styles from './TaskCard.module.scss';
import { formatDate } from '@/utils/time';
import TaskCheckbox from '@/Components/Molecules/TaskCheckbox/TaskCheckbox';

interface TaskCardProps {
    task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
    const isCompleted = task.status === 'done';

    return (
        <div className={`${styles.taskCard} ${isCompleted ? styles.completed : ''}`}>
            <div className={styles.leftSection}>
                <TaskCheckbox isCompleted={isCompleted} id={task.id} status={task.status} />
                <span className={styles.title}>{task.title}</span>
            </div>
            <div className={styles.rightSection}>
                {task.created_at && (
                    <span className={styles.time}>{formatDate(task.created_at)}</span>
                )}
            </div>
        </div>
    );
}
