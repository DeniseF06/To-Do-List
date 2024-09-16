import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./Input.module.css";
import { Task } from "./List/Task";
import { ListHeader } from "./List/Header";
import { v4 as uuidv4 } from "uuid";
import { Empty } from "./List/Empty";

interface TaskProps {
  id: string;
  content: string;
  isCheck: boolean;
}

export function Input() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [newTaskText, setNewTaskText] = useState("");

  const [taskCheck, setTaskCheck] = useState(0);

  function handleCreatNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: newTaskText,
        isCheck: false,
      },
    ]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function setCheck(id: string) {
    const newTasksWithNewCheck = tasks.map((task) => {
      if (task.id === id) {
        task.isCheck = !task.isCheck;
      }
      return task;
    });
    setTasks(newTasksWithNewCheck);
    countTasksCheck(newTasksWithNewCheck);
  }

  function countTasksCheck(tasks: TaskProps[]) {
    const counterTask = tasks.filter((task) => task.isCheck).length;
    setTaskCheck(counterTask);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteTask(uuid: string) {
    const taskWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== uuid;
    });

    setTasks(taskWithoutDeleteOne);
    countTasksCheck(taskWithoutDeleteOne);
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <article>
      <form onSubmit={handleCreatNewTask} className={styles.input}>
        <textarea
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={newTaskText}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <div>
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>
      </form>

      <ListHeader isCheckLength={taskCheck} tasks={tasks.length} />

      <div className={styles.taskList}>
        {tasks.length >= 1 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              onDeleteTask={deleteTask}
              checkTask={setCheck}
              isCheck={false}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </article>
  );
}

export type { TaskProps };
