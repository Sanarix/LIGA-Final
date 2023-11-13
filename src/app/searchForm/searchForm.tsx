import { FormEvent, useState } from 'react';
import styles from './searchForm.module.css';
import { MemoButtonGroup, SearchInput } from 'components/index';
import { ACTIVE_TASKS, ALL_TASKS, DONE_TASKS, IMPORTANT_TASKS } from 'constants/searchTypes';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';
import { usePaginationSlice } from 'src/slices/pagination/pagination.hooks';
import { useSearchSlice } from 'src/slices/search/search.hooks';

export function SearchForm() {
  const { dispatch, fetchTasks, fetchTasksByName } = useTasksSlice();
  const [searchText, setSearchText] = useState('');
  const { setCurrentPage, paginationDispatch } = usePaginationSlice();
  const { searchType } = useSearchSlice();

  function searchFunc(e: FormEvent) {
    e.preventDefault();

    if (searchText.trim().length > 0) {
      dispatch(fetchTasksByName({ taskName: searchText, searchQuery: searchType }));
    } else {
      //Todo проверять searchType
      dispatch(fetchTasks());
    }

    paginationDispatch(setCurrentPage(1));
  }

  return (
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
  );
}
