import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  tenure: null,
  rating: null,
  yieldRange: { min: 0, max: 100 },
  searchTerm: ''
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setTenure: (state, action) => {
      state.tenure = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setYieldRange: (state, action) => {
      state.yieldRange = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearFilters: (state) => {
      state.category = null;
      state.tenure = null;
      state.rating = null;
      state.yieldRange = { min: 0, max: 100 };
      state.searchTerm = '';
    }
  }
});

export const {
  setCategory,
  setTenure,
  setRating,
  setYieldRange,
  setSearchTerm,
  clearFilters
} = filtersSlice.actions;

export default filtersSlice.reducer;
