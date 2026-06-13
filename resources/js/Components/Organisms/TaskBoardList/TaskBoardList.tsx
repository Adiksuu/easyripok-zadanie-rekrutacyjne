import styles from './TaskBoardList.module.scss';
import TaskBoard from '../TaskBoard/TaskBoard';
import { Task } from '@/types/task';

interface TaskBoardListProps {
    tasks: Task[];
    activeTab: 'all' | 'active' | 'completed';
}

export default function TaskBoardList({ tasks, activeTab }: TaskBoardListProps) {
    const todayTasks = tasks.filter(task => task.status === 'todo');
    const upcomingTasks = tasks.filter(task => task.status === 'in_progress');

    const completedTasks = tasks.filter(task => task.status === 'done');

    const showToday = activeTab === 'all' || activeTab === 'active';
    const showUpcoming = activeTab === 'all' || activeTab === 'active';
    const showCompleted = activeTab === 'all' || activeTab === 'completed';

    return (
        <div className={styles.taskBoardList}>
            {showToday && (
                <TaskBoard title="Do wykonania" tasks={todayTasks} />
            )}
            {showUpcoming && (
                <TaskBoard title="W trakcie realizacji" tasks={upcomingTasks} />
            )}
            {showCompleted && (
                <TaskBoard title="Ukończone" tasks={completedTasks} />
            )}
        </div>
    );
}