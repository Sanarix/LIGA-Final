import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageContainer, SearchInput } from '../../components/index';
import { RootState } from '../../store/store';
import { List } from './list/List';
import styles from './TaskList.module.css';

export function TaskList() {
  const [searchText, setSearchText] = useState('');
  const data = useSelector((state: RootState) => {
    return state;
  });

  const navigate = useNavigate();

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
      <List tasks={data.tasks.taskList} navigate={navigate} />
      <button
        className={styles.addButton}
        onClick={() => {
          navigate('/TaskForm');
        }}>
        Add Task
      </button>
    </PageContainer>
  );
}
