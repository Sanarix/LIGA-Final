import { setCurrentPage, setCurrentTasks } from './pagination.slice';
import { ReduxStore } from 'src/types';
import { useAppDispatch, useAppSelector } from 'src/store';

export const usePaginationSlice = () => {
  const currentPage = useAppSelector((state: ReduxStore) => state.pagination.currentPage);
  const currentTasks = useAppSelector((state: ReduxStore) => state.pagination.currentTasks);
  const tasksPerPage = useAppSelector((state: ReduxStore) => state.pagination.tasksPerPage);
  const paginationDispatch = useAppDispatch();
  return { setCurrentPage, setCurrentTasks, currentPage, currentTasks, tasksPerPage, paginationDispatch };
};
