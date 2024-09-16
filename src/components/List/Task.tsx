import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { useState } from "react";

interface TaskProps {
  content: string;
  id: string;
  isCheck: boolean;
  onDeleteTask: (task: string) => void;
  checkTask: (task: string) => void;
}

export function Task({ content, onDeleteTask, checkTask, id }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  const [check, setCheck] = useState(false);

  function handleCheckTask() {
    setCheck(!check);
    {
      checkTask(id);
    }
  }

  function showTask() {
    if (check) {
      return <Check size={12} />;
    }
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskList}>
        <button
          title="checkmark"
          className={styles.check}
          onClick={handleCheckTask}
        >
          {showTask()}
        </button>

        <div className={styles.taskBox}>
          <p>{content}</p>
        </div>

        <button
          onClick={handleDeleteTask}
          title="Deletar comentário"
          className={styles.trash}
        >
          <Trash size={14} />
        </button>
      </div>
    </div>
  );
}
