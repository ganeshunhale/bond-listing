import { createSlice } from '@reduxjs/toolkit';
import { bondsData } from '../../data/bonds';

const initialState = {
  allBonds: bondsData,
  featuredBond: bondsData[0],
  selectedBond: null,
  investorPicks: bondsData.slice(0, 3),
  loading: false,
  error: null
};

const bondsSlice = createSlice({
  name: 'bonds',
  initialState,
  reducers: {
    setFeaturedBond: (state, action) => {
      state.featuredBond = action.payload;
    },
    setSelectedBond: (state, action) => {
      state.selectedBond = action.payload;
    },
    setInvestorPicks: (state, action) => {
      state.investorPicks = action.payload;
    },
    getBondById: (state, action) => {
      state.selectedBond = state.allBonds.find(bond => bond.id === action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setFeaturedBond,
  setSelectedBond,
  setInvestorPicks,
  getBondById,
  setLoading,
  setError
} = bondsSlice.actions;

export default bondsSlice.reducer;
