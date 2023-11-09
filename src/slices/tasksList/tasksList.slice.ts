import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TasksState } from './tasksListSlice.types';
import type { TaskLocal } from 'src/types/task/TaskLocal.types';
import { tasksState } from 'src/mocks/initialTasks';

const initialState: TasksState = {
  taskList: tasksState,
};

export const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskLocal>) => {
      state.taskList.push(action.payload);
    },
    changeTask: (state, action: PayloadAction<TaskLocal>) => {
      state.taskList = state.taskList.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
    deleteTask: (state, action: PayloadAction<number | unknown>) => {
      if (action.payload) {
        state.taskList = state.taskList.filter((task) => task.id !== action.payload);
      }
    },
  },
});

export const { addTask, changeTask, deleteTask } = tasksListSlice.actions;
export default tasksListSlice.reducer;
