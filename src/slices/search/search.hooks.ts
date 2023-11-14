import { changeSearch } from './search.slice';
import { ReduxStore } from 'types/redux/redux';
import { useAppDispatch, useAppSelector } from 'src/store';

export const useSearchSlice = () => {
  const searchQuery = useAppSelector((state: ReduxStore) => state.search.searchQuery);
  const searchDispatch = useAppDispatch();
  return { changeSearch, searchQuery, searchDispatch };
};
