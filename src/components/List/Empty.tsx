import styles from "./Empty.module.css";

export function Empty() {
  return (
    <main className={styles.empty}>
      <div className={styles.emptyTask}>
        <img src="src\assets\Clipboard.png" alt="clipboard" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </main>
  );
}
