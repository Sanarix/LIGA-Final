import { createSlice } from '@reduxjs/toolkit';
import type { TasksState } from './tasksListSlice.types';
import { tasksState } from 'src/mocks/initialTasks';

const initialState: TasksState = {
  tasksData: tasksState,
};

export const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasksData.push(action.payload);
    },
    changeTask: (state, action) => {
      state.tasksData = state.tasksData.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
    deleteTask: (state, action) => {
      if (action.payload) {
        state.tasksData = state.tasksData.filter((task) => task.id !== action.payload);
      }
    },
  },
});

export const { addTask, changeTask, deleteTask } = tasksListSlice.actions;
export default tasksListSlice.reducer;
