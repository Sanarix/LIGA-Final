import { createSlice } from '@reduxjs/toolkit';
import { tasksPerPage } from 'constants/tasksPerPage';
import { FetchedTasks } from 'src/types';

type InitialType = {
  currentPage: number;
  currentTasks: FetchedTasks;
  tasksPerPage: number;
};

const initialState: InitialType = {
  currentPage: 1,
  currentTasks: [],
  tasksPerPage: tasksPerPage,
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
