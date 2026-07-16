import { combineReducers, configureStore } from '@reduxjs/toolkit';
import trucksReducer from './campersSlice';
import filtersReducer from './filtersSlice';

const rootReducer = combineReducers({
  contacts: trucksReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
