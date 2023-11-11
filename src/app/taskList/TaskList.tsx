import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MemoList } from './list/List';
import styles from './TaskList.module.css';
import { PageContainer, SearchInput } from 'src/components/index';
import { ReduxStore } from 'types/redux/redux';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';
import { QueryButton } from 'components/QueryButton/QueryButton';
import { ACTIVE_TASKS, ALL_TASKS, DONE_TASKS, IMPORTANT_TASKS } from 'constants/searchTypes';
import { useSearchSlice } from 'src/slices/search/search.hooks';
import { MemoButtonGroup } from 'components/ButtonGroup/ButtonGroup';

export function TaskList() {
  const [searchText, setSearchText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { dispatch, fetchTasks, fetchTasksByName } = useTasksSlice();
  const data = useSelector((state: ReduxStore) => {
    return state;
  });
  const { searchType } = useSearchSlice();

  function searchFunc(e: FormEvent) {
    e.preventDefault();

    if (searchText.trim().length > 0) {
      dispatch(fetchTasksByName({ taskName: searchText, searchQuery: searchType }));
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
            onReset={() => {
              if (searchText.length > 0) {
                setSearchText('');
                dispatch(fetchTasks());
              }
            }}
          />
          <MemoButtonGroup buttons={[ALL_TASKS, ACTIVE_TASKS, DONE_TASKS, IMPORTANT_TASKS]} />
          <button className="submit-btn">Find</button>
        </form>
      </header>
      <MemoList tasksArr={data.tasksList.tasksData} />
      <Link to="/TaskForm" className={styles.addButton}>
        Add Task
      </Link>
    </PageContainer>
  );
}
