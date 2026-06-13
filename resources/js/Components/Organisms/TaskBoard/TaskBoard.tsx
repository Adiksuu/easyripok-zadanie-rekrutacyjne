import { Task } from '@/types/task';
import styles from './TaskBoard.module.scss';
import TaskCard from '../TaskCard/TaskCard';
import ColumnHeader from '@/Components/Molecules/ColumnHeader/ColumnHeader';

interface TaskBoardProps {
    title: string;
    tasks: Task[];
}

export default function TaskBoard({ title, tasks }: TaskBoardProps) {
    return (
        <div className={styles.taskBoard}>
            <ColumnHeader title={title} length={tasks.length} />
            {tasks.length > 0 && (
                <div className={styles.tasksContainer}>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
}
