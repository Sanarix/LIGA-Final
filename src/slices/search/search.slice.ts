import { createSlice } from '@reduxjs/toolkit';
import { ALL_TASKS } from 'constants/searchTypes';

const initialState: { searchType: 'all' | 'active' | 'done' | 'important' } = { searchType: ALL_TASKS };

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.searchType = action.payload;
    },
  },
});

export const { changeSearch } = searchSlice.actions;
export default searchSlice.reducer;
