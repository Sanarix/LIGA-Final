import { changeSearch } from './search.slice';
import { ReduxStore } from 'src/types';
import { useAppDispatch, useAppSelector } from 'src/store';

export const useSearchSlice = () => {
  const searchQuery = useAppSelector((state: ReduxStore) => state.search.searchQuery);
  const searchDispatch = useAppDispatch();
  return { changeSearch, searchQuery, searchDispatch };
};
