import { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MemoList } from './list/List';
import styles from './TaskList.module.css';
import { PageContainer } from 'src/components/index';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';

import { SearchForm } from 'app/searchForm/searchForm';

function TaskList() {
  const { dispatch, fetchTasks } = useTasksSlice();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <PageContainer className="task-list">
      <header className={styles.header}>
        <h1 className="">Todo List</h1>
        <SearchForm />
      </header>
      <MemoList />
      <Link to="/TaskForm" className={styles.addButton}>
        Add Task
      </Link>
    </PageContainer>
  );
}

export const MemoTaskList = memo(TaskList);
