import Icon from '@/Components/Atoms/Icon/Icon'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './TaskCheckbox.module.scss'
import { Link } from '@inertiajs/react';

interface TaskCheckboxProps {
    isCompleted: boolean;
    id: number;
    status: string;
}

export default function TaskCheckbox({ isCompleted, id, status }: TaskCheckboxProps) {
    return (
        <Link href={`/tasks/${id}/status`} method='patch' data={{ status: status === 'todo' ? 'in_progress' : 'done' }} as={"button"} className={styles.checkboxWrapper}>
            {isCompleted ? (
                <div className={styles.checkedCircle}>
                    <Icon icon={faCheck} className={styles.checkIcon} />
                </div>
            ) : (
                <div className={styles.uncheckedCircle} />
            )}
    </Link>
  )
}
