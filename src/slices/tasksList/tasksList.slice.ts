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
    pushTask: (state, action) => {
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
    checkTask: (state, action) => {
      state.tasksData = state.tasksData.map((task) => {
        if (task.id === Number(action.payload.taskId)) {
          return { ...task, isCompleted: true };
        }
        return task;
      });
    },
    deleteTask: (state, action) => {
      if (action.payload) {
        state.tasksData = state.tasksData.filter((task) => task.id !== Number(action.payload.taskId));
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

export const { pushTask, changeTask, deleteTask, setLoader, unsetLoader, setTasks, checkTask } = tasksListSlice.actions;
export default tasksListSlice.reducer;
