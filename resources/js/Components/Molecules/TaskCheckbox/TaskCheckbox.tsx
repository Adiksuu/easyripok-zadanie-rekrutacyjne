import Icon from '@/Components/Atoms/Icon/Icon'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './TaskCheckbox.module.scss'

interface TaskCheckboxProps {
    isCompleted: boolean;
}

export default function TaskCheckbox({ isCompleted }: TaskCheckboxProps) {
    return (
        <div className={styles.checkboxWrapper}>
            {isCompleted ? (
                <div className={styles.checkedCircle}>
                    <Icon icon={faCheck} className={styles.checkIcon} />
                </div>
            ) : (
                <div className={styles.uncheckedCircle} />
            )}
    </div>
  )
}
