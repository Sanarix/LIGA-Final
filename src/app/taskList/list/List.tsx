import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import type { ListProps } from './List.types';
import styles from './List.module.css';
import { Task } from 'src/app/taskList/task/Task';
import { Checkbox } from 'components/Checkbox';
import { deleteTask } from 'src/slices/tasksList/tasksList.slice';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';
import { Loader } from 'components/Loader';

export function List({ tasksArr }: ListProps) {
  const { isLoading, tasks, dispatch, fetchTasks } = useTasksSlice();

  const handler = () => {
    dispatch(fetchTasks());
  };

  return (
    <div className="tasks-wrapper">
      <button onClick={() => handler()}>Получить таски</button>
      <Loader isLoading={isLoading}>
        {tasksArr.map((task, i) => {
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
                <Link to={`/TaskForm/${task.id}`} className={styles.button}>
                  Edit
                </Link>
                <button
                  className={styles.deleteButton}
                  onClick={() => {
                    dispatch(deleteTask(task.id));
                  }}>
                  Delete
                </button>
              </div>
            </Task>
          );
        })}
      </Loader>
    </div>
  );
}
