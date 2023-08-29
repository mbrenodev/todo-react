import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { Clipboard, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [tasks, setTasks] = useState([]);
  
  const [newTaskText, setNewTaskText] = useState("");

  const [tasksComplete, setTasksComplete] = useState(0);

  const countTasksComplete = tasks.filter((item) => item.isComplete === true).length;
  const countTasksNotComplete = tasks.filter(
    (item) => item.isComplete === false
  ).length;

  function handleAddTask(event) {
    event.preventDefault();
    const newTaskText = event.target.task.value;
    const id = uuidv4();
    const newTask = {
      id: id,
      title: newTaskText,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleCompleteTask(id, isCheckedTask) {
    tasks.filter((task) => {
      if (task.id === id) {
        task.isComplete = isCheckedTask;
        const count = tasks.filter((item) => item.isComplete === true).length;
        setTasksComplete(count);
      }
    });
  }

  function handleDeleteTask(id) {
    const tasksWithoutDeletedOneNotChecked = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(tasksWithoutDeletedOneNotChecked);
    calcTasksComplete();
  }

  function calcTasksComplete() {
    if (countTasksNotComplete >= 1) {
      setTasksComplete(countTasksComplete);
    } else if (countTasksComplete >= 1) {
      setTasksComplete(countTasksComplete - 1);
    }
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleAddTask} className={styles.createTask}>
          <input
            name="task"
            type="text"
            onChange={handleNewTaskChange}
            value={newTaskText}
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle size={40} weight="bold" />
          </button>
        </form>

        <div className={styles.title}>
          <p>
            Tarefas criadas <button>{tasks.length}</button>
          </p>
          <p>
            Concluídas{" "}
            <button>
              {tasksComplete} de {tasks.length}
            </button>
          </p>
        </div>

        {tasks.length <= 0 ? (
          <div className={styles.tasksOut}>
            <Clipboard size={56} weight="thin" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          ""
        )}

        {tasks.map((task) => {
          return (
            <Tasks
              key={task.id}
              id={task.id}
              title={task.title}
              onCompleteTask={handleCompleteTask}
              onDeleteTask={handleDeleteTask}
            />
          );
        })}
      </div>
    </>
  );
}
