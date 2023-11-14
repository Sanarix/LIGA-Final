import { FormEvent, memo, useState } from 'react';
import styles from './searchForm.module.css';
import { MemoButtonGroup } from './ButtonGroup';
import { SearchInput } from 'src/components';
import { ACTIVE_TASKS, ALL_TASKS, DONE_TASKS, IMPORTANT_TASKS } from 'constants/searchTypes';
import { useSearchSlice, usePaginationSlice, useTasksSlice } from 'src/slices';

function SearchForm() {
  const [searchText, setSearchText] = useState('');
  const { searchQuery } = useSearchSlice();
  const { isLoading, dispatch, fetchTasks, fetchTasksByName } = useTasksSlice();
  const { setCurrentPage, paginationDispatch } = usePaginationSlice();

  function searchFunc(e: FormEvent) {
    e.preventDefault();

    if (searchText.trim().length > 0) {
      dispatch(fetchTasksByName({ taskName: searchText }, searchQuery));
    } else {
      //Todo проверять searchType
      dispatch(fetchTasks(searchQuery));
    }

    paginationDispatch(setCurrentPage(1));
  }

  return (
    <form id={styles['search-form']} onSubmit={searchFunc}>
      {' '}
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
      <button className="submit-btn" disabled={isLoading ? true : false}>
        Find
      </button>
    </form>
  );
}

export const MemoSearchForm = memo(SearchForm);
