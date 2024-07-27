import { configureStore } from '@reduxjs/toolkit';
import communityReducer from '../feautres/community/communitySlice';
import authReducer from '../feautres/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
      community: communityReducer,
    },
});
