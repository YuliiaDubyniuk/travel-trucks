import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
  page: 1,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action) {
      return {
        ...state,
        ...action.payload,
        page: 1,
      };
    },
    incrementPage(state) {
      state.page += 1;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilters, resetFilters, incrementPage } = filtersSlice.actions;
export default filtersSlice.reducer;
