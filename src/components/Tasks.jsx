import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css"

export function Tasks({id, title, onDeleteTask, onCompleteTask}) {

  function handleDeleteTask(){
    onDeleteTask(id)
  }
  
  function handleIsCheckedTask(event){
    const isCheckedTask = event.target.checked
    onCompleteTask(id, isCheckedTask)
  }

  return (
    <form className={styles.tasks}>
      <input 
        id={id} 
        type="checkbox"
        onChange={handleIsCheckedTask}
      />
      <label htmlFor={id}>
        {title}
      </label>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={16} />
      </button>
    </form>
  );
}
