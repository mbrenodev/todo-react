import { PlusCircle } from 'phosphor-react'
import styles from './InputTask.module.css'

export function InputTask() {
  return (
    <div className={styles.createTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={40} weight="bold" />
      </button>
    </div>
  );
}
