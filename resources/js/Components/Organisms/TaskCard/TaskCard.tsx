import StatusIcon from '@/Components/Molecules/StatusIcon/StatusIcon';
import styles from './taskCard.module.scss';
import { Task } from '@/types/task';

interface TaskColumnProps {
    task: Task;
}

export default function TaskColumn({ task }: TaskColumnProps) {
  return (
    <div className={styles.taskCard}>
        <p className={styles.title}>{task.title}</p>
        <StatusIcon status={task.status} />
    </div>
  )
}
