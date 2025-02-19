import { createSlice } from '@reduxjs/toolkit';
import type { TasksState } from './tasksListSlice.types';
import { ACTIVE_TASKS, ALL_TASKS, DONE_TASKS, IMPORTANT_TASKS } from 'constants/searchTypes';
import { FetchedTasks } from 'src/types';
import { mapTaskId } from 'utils/mappers/mapTaskId';

const initialState: TasksState = {
  tasksData: [],
  isLoading: false,
};

export const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      const tasks: FetchedTasks = action.payload.tasks;
      let filter = action.payload.searchQuery;
      if (!filter) {
        filter = ALL_TASKS;
      }

      switch (filter) {
        case ALL_TASKS:
          state.tasksData = tasks;
          break;
        case ACTIVE_TASKS:
          state.tasksData = tasks.filter((task) => task.isCompleted !== true || task.isCompleted === undefined);
          break;
        case DONE_TASKS:
          state.tasksData = tasks.filter((task) => task.isCompleted === true);
          break;
        case IMPORTANT_TASKS:
          state.tasksData = tasks.filter((task) => task.isImportant === true && task.isCompleted === false);
          break;
        default:
          state.tasksData = action.payload.tasks;
          throw new Error('Incorrect search query');
      }
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
        if (task.id === mapTaskId(action.payload.taskId)) {
          return { ...task, isCompleted: true, isImportant: false };
        }
        return task;
      });
    },

    deleteTask: (state, action) => {
      if (action.payload) {
        state.tasksData = state.tasksData.filter((task) => task.id !== mapTaskId(action.payload.taskId));
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
