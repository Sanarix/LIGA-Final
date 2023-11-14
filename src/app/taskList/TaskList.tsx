import { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MemoList } from './list/List';
import styles from './TaskList.module.css';
import { PageContainer } from 'src/components/index';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';

import { MemoSearchForm } from 'app/searchForm/searchForm';
import { useErrorSlice } from 'src/slices/errors/errors.hook';

function TaskList() {
  const { dispatch, fetchTasks } = useTasksSlice();
  const { error } = useErrorSlice();
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <PageContainer className="task-list">
      {error && <div className={styles.errorBlock}>{error}</div>}
      <header className={styles.header}>
        <h1 className="">Todo List</h1>
        <MemoSearchForm />
      </header>
      <MemoList />
      <Link to="/TaskForm" className={styles.addButton}>
        Add Task
      </Link>
    </PageContainer>
  );
}

export const MemoTaskList = memo(TaskList);
