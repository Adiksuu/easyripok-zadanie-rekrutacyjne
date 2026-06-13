import { useState } from "react";
import Header from "@/Components/Organisms/Header/Header";
import TaskBoardList from "@/Components/Organisms/TaskBoardList/TaskBoardList";
import { Task } from "@/types/task";
import Icon from "@/Components/Atoms/Icon/Icon";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./MainLayout.module.scss";

type TabType = 'all' | 'active' | 'completed';

export default function MainLayout({ tasks }: { tasks: Task[] }) {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const allTasks = tasks || [];

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
