import { useState } from "react";
import Header from "@/Components/Organisms/Header/Header";
import TaskBoardList from "@/Components/Organisms/TaskBoardList/TaskBoardList";
import { Task } from "@/types/task";
import Icon from "@/Components/Atoms/Icon/Icon";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./MainLayout.module.scss";

const DEFAULT_TASKS: Task[] = [
  { id: 1, title: 'Przygotować prezentację dla klienta', status: 'todo', dueTime: '10:00', iconType: 'flag-red' },
  { id: 2, title: 'Odpisać na maile', status: 'todo', dueTime: '12:00', iconType: 'flag-yellow' },
  { id: 3, title: 'Trening na siłowni', status: 'todo', dueTime: '17:00', iconType: 'flag-green' },
  { id: 4, title: 'Zrobić zakupy', status: 'todo', dueTime: '19:00', iconType: 'document' },
  { id: 5, title: 'Przeczytać 20 stron książki', status: 'todo', dueTime: '21:00', iconType: 'document' },
  { id: 6, title: 'Spotkanie zespołu', status: 'todo', dueTime: 'Jutro, 09:00', iconType: 'calendar' },
  { id: 7, title: 'Oddać projekt do akceptacji', status: 'todo', dueTime: 'Jutro, 16:00', iconType: 'calendar' },
  { id: 8, title: 'Lekarz kontrola', status: 'todo', dueTime: 'Piątek, 11:00', iconType: 'calendar' },
  { id: 9, title: 'Zadzwonić do mamy', status: 'todo', dueTime: 'Sobota, 18:00', iconType: 'calendar' },
  { id: 10, title: 'Kup prezent urodzinowy', status: 'done', dueTime: 'Wczoraj, 15:30', iconType: 'calendar' }
];

type TabType = 'all' | 'active' | 'completed';

export default function MainLayout({ tasks }: { tasks?: Task[] }) {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const allTasks = tasks && tasks.length > 0 ? tasks : DEFAULT_TASKS;

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.filterRow}>
          <div className={styles.tabsContainer}>
            <button
              className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Wszystkie
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'active' ? styles.active : ''}`}
              onClick={() => setActiveTab('active')}
            >
              Aktywne
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'completed' ? styles.active : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              Ukończone
            </button>
          </div>

          <div className={styles.sortDropdown}>
            <span>Sortuj: Data</span>
            <Icon icon={faChevronDown} size="sm" />
          </div>
        </div>

        <TaskBoardList tasks={allTasks} activeTab={activeTab} />
      </main>
    </div>
  );
}
