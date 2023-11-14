import { createSlice } from '@reduxjs/toolkit';
import { ALL_TASKS } from 'constants/searchTypes';

const initialState: { searchQuery: 'all' | 'active' | 'done' | 'important' } = { searchQuery: ALL_TASKS };

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { changeSearch } = searchSlice.actions;
export default searchSlice.reducer;
