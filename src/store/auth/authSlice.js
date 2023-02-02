import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
    status: localStorage.getItem('status')
      ? localStorage.getItem('status')
      : 'not-authenticated',
    accessToken: localStorage.getItem('accessToken')
      ? localStorage.getItem('accessToken')
      : null,
    errorMessage: null,
    userProfile: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload.user;
      state.accessToken = payload.access_token;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.accessToken = null;
      state.errorMessage = payload.errorMessage;
      localStorage.removeItem('user');
      localStorage.removeItem('status');
      localStorage.removeItem('accessToken');
    },
    checkingCredentials: state => {
      state.status = 'checking';
    },
    setUserProfile: (state, { payload }) => {
      state.userProfile = payload;
    }
  },
});

export const { login, logout, checkingCredentials, setUserProfile } = authSlice.actions;
