import { changeSearch } from './search.slice';
import { ReduxStore } from 'types/redux/redux';
import { useAppDispatch, useAppSelector } from 'src/store';

export const useSearchSlice = () => {
  const searchType = useAppSelector((state: ReduxStore) => state.search.searchType);
  const searchDispatch = useAppDispatch();
  return { changeSearch, searchType, searchDispatch };
};
