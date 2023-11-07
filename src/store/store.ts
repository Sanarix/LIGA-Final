import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import tasksListReducer from './slices/tasksList/tasksList.slice';

export const store = configureStore({
  reducer: {
    tasks: tasksListReducer,
  },
  // middleware: [logger], ругается на logger
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
