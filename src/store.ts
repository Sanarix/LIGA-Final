import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import tasksListReducer from './slices/tasksList/tasksList.slice';
import { ReduxStore } from 'types/redux/redux.types';
import errorsSlice from 'src/slices/errors/error.slice';
import searchSlice from 'src/slices/search/search.slice';
import paginationSlice from 'src/slices/pagination/pagination.slice';

export const store = configureStore<ReduxStore>({
  reducer: {
    tasksList: tasksListReducer,
    errors: errorsSlice,
    search: searchSlice,
    pagination: paginationSlice,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
