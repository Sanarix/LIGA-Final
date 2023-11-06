import { configureStore } from '@reduxjs/toolkit';
import tasksListReducer from './slices/tasksList/tasksList.slice';

export const store = configureStore({
  reducer: {
    tasks: tasksListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
