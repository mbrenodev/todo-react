import { PlusCircle } from 'phosphor-react'
import styles from './InputTask.module.css'
import { useState } from 'react';

export function InputTask() {
  const [task, setTask] = useState('')
  
  
  async function handleAddTask(event) {
    event.preventDefault()
    const newTask = event.target.task.value
    setTask([...task, newTask])
  }
  
  
  return (
    <form onSubmit={handleAddTask} className={styles.createTask}>
      <input name='task' type="text" placeholder="Adicione uma nova tarefa" />
      <button
        type='submit'
      >
        Criar
        <PlusCircle size={40} weight="bold" />
      </button>
      {task}
    </form>
  );
}
