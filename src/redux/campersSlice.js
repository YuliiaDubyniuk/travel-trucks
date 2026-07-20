import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers, fetchCamperDetails } from './campersOps';

const initialState = {
  items: [],
  selectedCamper: null,
  loading: false,
  error: null,
  hasMore: true,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllCampers.pending, (state, action) => {
        if (action.meta.arg.page === 1) {
          state.items = [];
          state.hasMore = true;
        }
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        const incomingItems = action.payload.items;
        const totalItems = action.payload.total;

        const page = action.meta.arg.page;
        if (page === 1) {
          state.items = incomingItems;
        } else {
          state.items.push(...incomingItems);
        }

        if (state.items.length === totalItems) {
          state.hasMore = false;
        }
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
          action.type.endsWith('/pending'),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
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
          action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload || action.error.message;
        }
      );
  },
});

export default campersSlice.reducer;
