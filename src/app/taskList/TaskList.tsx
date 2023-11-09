import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List } from './list/List';
import styles from './TaskList.module.css';
import { PageContainer, SearchInput } from 'src/components/index';
import { ReduxStore } from 'types/redux/redux';

export function TaskList() {
  const [searchText, setSearchText] = useState('');
  const data = useSelector((state: ReduxStore) => {
    return state;
  });

  return (
    <PageContainer className="task-list">
      <header className={styles.header}>
        <h1 className="">Todo List</h1>
        <form id="seacrh-from">
          <SearchInput
            onChange={function (text: string): void {
              setSearchText(text);
            }}
            value={searchText}
          />
        </form>
      </header>
      <List tasks={data.tasksList.tasksData} />
      <Link to="/TaskForm" className={styles.addButton}>
        Add Task
      </Link>
    </PageContainer>
  );
}
