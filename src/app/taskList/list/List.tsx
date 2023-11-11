import { Link } from 'react-router-dom';
import { useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import styles from './List.module.css';
import iconDelete from 'assets/icons/icon-delete.svg';
import iconEdit from 'assets/icons/icon-edit.svg';
import { Task } from 'src/app/taskList/task/Task';
import { Checkbox } from 'components/Checkbox';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';
import { Loader } from 'components/Loader';
import { mapDeleteTask } from 'utils/mapDeleteTask';
import type { ReduxStore } from 'types/redux/redux';

function List() {
  const { isLoading, tasks, dispatch, fetchTasks, checkTaskById, removeTaskById } = useTasksSlice();

  const tasksArr = useSelector((state: ReduxStore) => {
    return state.tasksList.tasksData;
  });

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

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
                  onChange={async () => {
                    await dispatch(checkTaskById(String(task.id)));
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
                  <svg className={styles.icon} aria-hidden="true">
                    <use xlinkHref={`${iconEdit}`}></use>
                  </svg>
                </Link>
                <button
                  className={styles.deleteButton}
                  onClick={async () => {
                    await dispatch(removeTaskById(mapDeleteTask(task.id)));
                  }}>
                  <svg className={styles.icon} aria-hidden="true">
                    <use xlinkHref={`${iconDelete}`}></use>
                  </svg>
                </button>
              </div>
            </Task>
          );
        })}
      </Loader>
      {tasksArr.length === 0 && <h3>Not found</h3>}
    </div>
  );
}

export const MemoList = memo(List);
