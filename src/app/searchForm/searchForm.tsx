import { useState } from 'react';
import styles from './searchForm.module.css';
import { MemoButtonGroup, SearchInput } from 'components/index';
import { ACTIVE_TASKS, ALL_TASKS, DONE_TASKS, IMPORTANT_TASKS } from 'constants/searchTypes';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';
import { useSearchSlice } from 'src/slices/search/search.hooks';
import { searchFunc } from 'utils/index';

export function SearchForm() {
  const { dispatch, fetchTasks } = useTasksSlice();
  const [searchText, setSearchText] = useState('');
  const { searchType } = useSearchSlice();

  return (
    <form id={styles['search-form']} onSubmit={(e) => searchFunc(e, searchText, searchType)}>
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
  );
}
