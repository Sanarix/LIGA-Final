import { createSlice } from '@reduxjs/toolkit';
import { FetchedTasks } from 'types/task/Task.types';

type InitialType = {
  currentPage: number;
  currentTasks: FetchedTasks;
  tasksPerPage: number;
};

const initialState: InitialType = {
  currentPage: 1,
  currentTasks: [],
  tasksPerPage: 10,
};

export const paginationSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentTasks: (state, action) => {
      state.currentTasks = action.payload;
    },
  },
});

export const { setCurrentPage, setCurrentTasks } = paginationSlice.actions;
export default paginationSlice.reducer;
