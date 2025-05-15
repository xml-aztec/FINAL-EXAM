import { createSlice } from '@reduxjs/toolkit';

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState: {
    email: '',
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = loginFormSlice.actions;
export default loginFormSlice.reducer;