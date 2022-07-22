import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
        state.isLoggedIn = true
    },
    logout: state => {
        state.isLoggedIn = false
    }
  }
});

const { login, logout } = auth.actions;

const authReducer = auth.reducer;

export {
    login,
    logout,
    authReducer,
};