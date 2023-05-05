import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';

import {
  signupUser,
  authLogin,
  authLogout,
  refreshUser,
  userForm,
} from './auth.operations';

const authInitState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(authLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(authLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(authLogout.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogout.fulfilled, () => authInitState)
      .addCase(authLogout.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, () => authInitState)

      .addCase(userForm.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(userForm.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(userForm.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = persistReducer(
  {
    key: 'auth',
    storage,
  },
  authSlice.reducer
);
