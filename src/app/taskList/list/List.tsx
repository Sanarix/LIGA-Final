import { Link } from 'react-router-dom';
import { memo } from 'react';
import styles from './List.module.css';
import { MemoPagination } from 'app/index';
import iconDelete from 'assets/icons/icon-delete.svg';
import iconEdit from 'assets/icons/icon-edit.svg';
import { Loader, Checkbox } from 'src/components';
import { useTasksSlice, usePaginationSlice } from 'src/slices';
import { mapDeleteTask } from 'src/utils';

function List() {
  const { isLoading, tasks, dispatch, checkTaskById, removeTaskById } = useTasksSlice();
  const { currentPage, tasksPerPage } = usePaginationSlice();

  const lastTaskIndex = currentPage * tasksPerPage;
  const firstTaskIndex = lastTaskIndex - tasksPerPage;
  const currentTasks = tasks.slice(firstTaskIndex, lastTaskIndex);

  return (
    <div className={styles.list}>
      <Loader isLoading={isLoading}>
        {currentTasks.map((task) => {
          return (
            <div className={styles['task-wrapper']} key={task.id}>
              <div className={styles['checkbox-container']}>
                <Checkbox
                  label=""
                  containerClassName={styles.checkbox}
                  checked={task.isCompleted ? true : false}
                  disabled={task.isCompleted ? true : false}
                  onChange={async (e) => {
                    e.currentTarget.disabled = true;
                    await dispatch(checkTaskById(String(task.id)));
                  }}
                />
              </div>
              <div className={styles.task}>
                <h2 className={styles['task-header']}>{task.name}</h2>
                <p className={styles['task-text']}>{task.info}</p>
              </div>
              <div className={styles.buttons}>
                <Link to={`/TaskForm/${task.id}`} className={styles.button}>
                  <div className={styles.icon}>
                    <svg aria-hidden="true">
                      <use xlinkHref={`${iconEdit}`}></use>
                    </svg>
                  </div>
                </Link>
                <button
                  className={styles.button}
                  onClick={async () => {
                    await dispatch(removeTaskById(mapDeleteTask(task.id)));
                  }}>
                  <div className={styles.icon}>
                    <svg aria-hidden="true">
                      <use xlinkHref={`${iconDelete}`}></use>
                    </svg>
                  </div>
                </button>
                {task.isImportant && !task.isCompleted && <span className={styles['is-important']}>Important</span>}
              </div>
            </div>
          );
        })}
        {currentTasks.length === 0 && <h3>Not found</h3>}
        {tasks.length <= tasksPerPage ? <></> : <MemoPagination />}
      </Loader>
    </div>
  );
}

export const MemoList = memo(List);
