import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css"

export function Tasks(props) {

  return (
    <div className={styles.tasks}>
      <input id="checkbox" type="checkbox" />
      <label htmlFor="checkbox">
        {props.title}
      </label>
      <button title="Deletar tarefa">
        <Trash size={16} />
      </button>
    </div>
  );
}
