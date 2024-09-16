import styles from "./Header.module.css";

export function ListHeader({ tasks, isCheckLength }) {
  return (
    <header className={styles.ListHeader}>
      <div className={styles.list}>
        <div className={styles.task}>
          <strong>Tarefas Criadas</strong>
          <span className={styles.numberTasks}>{tasks}</span>
        </div>

        <div className={styles.taskDone}>
          <strong>Concluídas</strong>
          <span className={styles.numberTasksCompleted}>
            {isCheckLength} de {tasks}
          </span>
        </div>
      </div>
    </header>
  );
}
