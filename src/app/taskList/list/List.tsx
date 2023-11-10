import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import type { ListProps } from './List.types';
import styles from './List.module.css';
import { Task } from 'src/app/taskList/task/Task';
import { Checkbox } from 'components/Checkbox';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';
import { Loader } from 'components/Loader';
import { mapDeleteTask } from 'utils/mapDeleteTask';

export function List({ tasksArr }: ListProps) {
  const { isLoading, dispatch, fetchTasks, removeTaskById } = useTasksSlice();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div className="tasks-wrapper">
      <Loader isLoading={isLoading}>
        {tasksArr.map((task) => {
          return (
            <Task key={task.id}>
              <div className={styles.checkbox}>
                <Checkbox
                  label=""
                  containerClassName={styles['checkbox-container']}
                  checked={task.isCompleted ? true : false}
                  disabled={task.isCompleted ? true : false}
                  onChange={() => {
                    console.log('TODO добавить запрос');
                  }}
                />
                {task.isImportant ? <p>important</p> : <></>}
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
                  onClick={async () => {
                    await dispatch(removeTaskById(mapDeleteTask(task.id)));
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
