<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
=======
import { configureStore } from '@reduxjs/toolkit';
import communityReducer from '../feautres/community/communitySlice';
import authReducer from '../feautres/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        community: communityReducer,
    },
>>>>>>> da2a6bc76e5cf1c61cf48b3e95b32c365a6fcd03
});
