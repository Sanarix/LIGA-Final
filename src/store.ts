import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import tasksListReducer from './slices/tasksList/tasksList.slice';
import { ReduxStore } from 'types/redux/redux';
import errorsSlice from 'src/slices/errors/error.slice';

export const store = configureStore<ReduxStore>({
  reducer: {
    tasksList: tasksListReducer,
    errors: errorsSlice,
  },
  // middleware: [logger], ругается на logger
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppselector: TypedUseSelectorHook<RootState> = useSelector;
