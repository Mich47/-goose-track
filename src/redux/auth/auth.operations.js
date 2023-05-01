import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-api-3uhn.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:4000/api';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signupUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);

      setAuthHeader(data.token);

      return { ...data };
    } catch (error) {
      const rejectMessage = error.response.data.message || error.message;

      return thunkAPI.rejectWithValue(rejectMessage);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', values);

      setAuthHeader(data.token);

      return { ...data };
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/user/logout');

      setAuthHeader('');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('Error authorization');
    }

    setAuthHeader(token);

    try {
      const { data } = await axios.get('/user/current');

      return { ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userForm = createAsyncThunk(
  'account',
  async (values, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('Error authorization');
    }

    setAuthHeader(token);

    try {
      const { data } = await axios.patch('/user/info', values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return { ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
