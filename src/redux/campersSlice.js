import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers, fetchCamperDetails } from './campersOps';

const initialState = {
  items: [],
  visibleItems: 4,
  selectedCamper: null,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllCampers.pending, state => {
        state.items = [];
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(fetchCamperDetails.pending, state => {
        state.selectedCamper = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      })
      .addMatcher(
        action =>
          action.type.startsWith('campers/') &&
          action.type.endsWith('/fulfilled'),
        state => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('campers/') &&
          action.type.endsWith('/pending'),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('campers/') &&
          action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload || action.error.message;
        }
      );
  },
});

export default campersSlice.reducer;
