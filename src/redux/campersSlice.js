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
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      })
      .addMatcher(
        ({ type }) => type.endsWith('pending'),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('fulfilled'),
        state => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});

export default campersSlice.reducer;
