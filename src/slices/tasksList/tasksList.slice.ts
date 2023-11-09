import { createSlice } from '@reduxjs/toolkit';
import type { TasksState } from './tasksListSlice.types';

const initialState: TasksState = {
  tasksData: [],
  isLoading: false,
};

export const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasksData = action.payload.tasks;
    },
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
    setLoader: (state) => {
      state.isLoading = true;
    },
    unsetLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addTask, changeTask, deleteTask, setLoader, unsetLoader, setTasks } = tasksListSlice.actions;
export default tasksListSlice.reducer;
