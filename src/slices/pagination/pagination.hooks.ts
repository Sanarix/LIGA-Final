import { setCurrentPage, setCurrentTasks } from './pagination.slice';
import { ReduxStore } from 'types/redux/redux';
import { useAppDispatch, useAppSelector } from 'src/store';

export const usePaginationSlice = () => {
  const currentPage = useAppSelector((state: ReduxStore) => state.pagination.currentPage);
  const currentTasks = useAppSelector((state: ReduxStore) => state.pagination.currentTasks);
  const paginationDispatch = useAppDispatch();
  return { setCurrentPage, setCurrentTasks, currentPage, currentTasks, paginationDispatch };
};
