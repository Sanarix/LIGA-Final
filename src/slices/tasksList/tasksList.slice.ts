import { createSlice } from '@reduxjs/toolkit';
import type { TasksState } from './tasksListSlice.types';
import { tasksState } from 'src/mocks/initialTasks';

const initialState: TasksState = {
  taskList: tasksState,
};

export const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    changeTask: (state, action) => {
      state.taskList = state.taskList.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
    deleteTask: (state, action) => {
      if (action.payload) {
        state.taskList = state.taskList.filter((task) => task.id !== action.payload);
      }
    },
  },
});

export const { addTask, changeTask, deleteTask } = tasksListSlice.actions;
export default tasksListSlice.reducer;
