import { FormEvent } from 'react';
import { usePaginationSlice } from 'src/slices/pagination/pagination.hooks';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';

export function searchFunc(e: FormEvent, searchText: string, searchType: string) {
  e.preventDefault();
  const { dispatch, fetchTasks, fetchTasksByName } = useTasksSlice();
  const { setCurrentPage, paginationDispatch } = usePaginationSlice();

  if (searchText.trim().length > 0) {
    dispatch(fetchTasksByName({ taskName: searchText, searchQuery: searchType }));
  } else {
    //Todo проверять searchType
    dispatch(fetchTasks());
  }

  paginationDispatch(setCurrentPage(1));
}
