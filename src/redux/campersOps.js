import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page, filters = {} }, thunkAPI) => {
    try {
      const params = {
        page,
        limit: 4,
      };

      if (filters.location) params.location = filters.location;
      if (filters.form) params.form = filters.form;
      if (filters.engine) params.engine = filters.engine;
      if (filters.transmission) params.transmission = filters.transmission;

      const response = await axios.get('/campers', { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  'campers/fetchDetails',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
