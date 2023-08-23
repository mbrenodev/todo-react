import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { Tasks } from './components/Tasks'


export function App() {
  const [task, setTask] = useState([])
  const [newTaskText, setNewTaskText] = useState('')

  async function handleAddTask(event) {
    event.preventDefault()
    const newTaskText = event.target.task.value
    const newTask = {
      id: 1,
      title: newTaskText,
      isComplete: false
    }
    setTask([...task, newTask])
    setNewTaskText('')
  }

  function handleNewTaskChange(){
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleAddTask} className={styles.createTask}>
          <input 
            name='task' 
            type="text" 
            onChange={handleNewTaskChange}
            value={newTaskText}
            placeholder="Adicione uma nova tarefa" 
          />
          <button
            type='submit'
          >
            Criar
            <PlusCircle size={40} weight="bold" />
          </button>
        </form>
        <div className={styles.title}>
        <p>
          Tarefas criadas <button>{task.length}</button>
        </p>
        <p>
          Concluídas <button>0 de {task.length}</button>
        </p>
      </div>
      {/* <div className={styles.tasksOut}>
        <Clipboard size={56} weight="thin" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div> */}
      {task.map(task => {
        return (
          <Tasks 
            key={task.id} 
            title={task.title}
            isCompleted={task.isComplete}
          />
        )
      })}
        {/* <InputTask /> */}
        {/* <PainelTasks  /> */}
      </div>
      {/* <Container /> */}
    </>
  )
}