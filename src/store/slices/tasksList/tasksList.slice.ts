import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TaskLocal } from '../../../types/task/TaskLocal.types';
import { tasksState } from '../../../mocks/initialTasks';
import type { TasksState } from './tasksListSlice.types';

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
  },
});

export const { addTask, changeTask } = tasksListSlice.actions;
export default tasksListSlice.reducer;
