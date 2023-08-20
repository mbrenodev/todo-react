import { InputTask } from './InputTask'
import { PainelTasks } from './PainelTasks'
import styles from "./Container.module.css";

export function Container() {
  return (
    <div className={styles.wrapper}>
      <InputTask />
      <PainelTasks />
    </div>
  );
}
