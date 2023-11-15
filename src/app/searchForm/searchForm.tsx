import { FormEvent, memo, useState } from 'react';
import styles from './searchForm.module.css';
import { MemoButtonGroup } from './ButtonGroup';
import { SearchInput } from 'src/components';
import { ACTIVE_TASKS, ALL_TASKS, DONE_TASKS, IMPORTANT_TASKS } from 'constants/searchTypes';
import { useSearchSlice, usePaginationSlice, useTasksSlice, changeSearch } from 'src/slices';

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
      dispatch(fetchTasks(searchQuery));
    }

    paginationDispatch(setCurrentPage(1));
  }

  return (
    <form className={styles['search-form']} onSubmit={searchFunc}>
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
            dispatch(changeSearch(ALL_TASKS));
          }
        }}
      />
      <div className={styles['container']}>
        <MemoButtonGroup buttons={[ALL_TASKS, ACTIVE_TASKS, DONE_TASKS, IMPORTANT_TASKS]} />
        <button className={styles['submit-btn']} disabled={isLoading ? true : false}>
          Find
        </button>
      </div>
    </form>
  );
}

export const MemoSearchForm = memo(SearchForm);
