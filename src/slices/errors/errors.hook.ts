import { setError, unsetError } from './error.slice';
import { ReduxStore } from 'src/types';
import { useAppDispatch, useAppSelector } from 'src/store';

export const useErrorSlice = () => {
  const error = useAppSelector((state: ReduxStore) => state.errors.value);
  const errorDispatch = useAppDispatch();
  return { error, setError, unsetError, errorDispatch };
};
