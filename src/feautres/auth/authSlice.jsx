// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
        state.token = action.payload;
        localStorage.setItem('token', action.payload);
        },
        removeToken: (state) => {
        state.token = null;
        localStorage.removeItem('token');
        },
        loadToken: (state) => {
        const token = localStorage.getItem('token');
        if (token) {
            state.token = token;
        }
        },
    },
});

export const { setToken, removeToken, loadToken } = authSlice.actions;
export default authSlice.reducer;
