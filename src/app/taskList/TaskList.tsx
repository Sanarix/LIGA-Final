import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List } from './list/List';
import styles from './TaskList.module.css';
import { PageContainer, SearchInput } from 'src/components/index';
import { ReduxStore } from 'types/redux/redux';
import { BtnGroup } from 'components/BtnGroup/BtnGroup';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';

export function TaskList() {
  const [searchText, setSearchText] = useState('');
  const { dispatch, fetchTasks, fetchTasksByParams } = useTasksSlice();
  const data = useSelector((state: ReduxStore) => {
    return state;
  });

  function searchFunc(e: FormEvent) {
    e.preventDefault();
    if (searchText.trim().length > 0) {
      dispatch(fetchTasksByParams({ taskName: searchText }));
    } else {
      dispatch(fetchTasks());
    }
  }

  return (
    <PageContainer className="task-list">
      <header className={styles.header}>
        <h1 className="">Todo List</h1>
        <form id={styles['search-form']} onSubmit={searchFunc}>
          <SearchInput
            onChange={function (text: string): void {
              setSearchText(text);
            }}
            value={searchText}
          />
          <BtnGroup classComponent="gff">
            <button>All</button>
            <button>Active</button>
            <button>Done</button>
            <button>Important</button>
          </BtnGroup>
          <button className="submit-btn">Find</button>
        </form>
      </header>
      <List tasksArr={data.tasksList.tasksData} />
      <Link to="/TaskForm" className={styles.addButton}>
        Add Task
      </Link>
    </PageContainer>
  );
}
