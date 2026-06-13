import { Task, TaskStatus } from '@/types/task';
import styles from './TaskBoard.module.scss';
import TaskColumn from '../TaskCard/TaskCard';
import ColumnHeader from '@/Components/Molecules/ColumnHeader/ColumnHeader';

interface TaskBoardProps {
    tasks: Task[];
    type: TaskStatus;
}

export default function TaskBoard({ tasks, type }: TaskBoardProps) {
    return (
        <div className={styles.taskBoard}>
            <ColumnHeader title={type.toUpperCase()} length={tasks.filter((task) => task.status === type).length} />
            {tasks.filter((task) => task.status === type).map((task) => (
                <TaskColumn key={task.id} task={task} />
            ))}
        </div>
    )
}
