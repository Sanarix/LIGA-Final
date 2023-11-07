import { Task } from '../task/Task';
import type { ListProps } from './List.types';
import styles from './List.module.css';
import { Checkbox } from 'components/Checkbox';

export function List({ tasks, navigate }: ListProps) {
  return (
    <div className="tasks-wrapper">
      {tasks.map((task, i) => {
        return (
          <Task key={i}>
            <div className={styles.checkbox}>
              <Checkbox label="" containerClassName={styles['checkbox-container']} />
            </div>
            <div className={styles.task}>
              <h2>{task.name}</h2>
              <p>{task.info}</p>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={() => {
                  navigate(`/TaskForm/${task.id}`);
                }}>
                Edit
              </button>
              <button
                className={styles.button}
                onClick={() => {
                  navigate(`/TaskForm/${task.id}`);
                }}>
                Delete
              </button>
            </div>
          </Task>
        );
      })}
    </div>
  );
}
