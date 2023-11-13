import { createSlice } from '@reduxjs/toolkit';
import { FetchedTasks } from 'types/task/Task.types';

const initialState: { currentPage: number; currentTasks: FetchedTasks } = { currentPage: 1, currentTasks: [] };

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
