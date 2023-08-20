import { Clipboard, Trash } from 'phosphor-react'
import styles from './PainelTasks.module.css'

export function PainelTasks() {
  return (
    <>
      <div className={styles.title}>
        <p>
          Tarefas criadas <button>0</button>
        </p>
        <p>
          Concluídas <button>0</button>
        </p>
      </div>
      <div className={styles.tasksOut}>
        <Clipboard size={56} weight="thin" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
      {/* <div className={styles.tasks}>
        <input id="checkbox" type="checkbox" />
        <label htmlFor="checkbox">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quidem
          praesentium labore nihi
        </label>
        <button title="Deletar tarefa">
          <Trash size={16} />
        </button>
      </div> */}
    </>
  );
}
