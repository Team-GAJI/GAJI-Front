import { configureStore } from "@reduxjs/toolkit";
import communityReducer from "../feautres/community/communitySlice";


export const store = configureStore({
  reducer: {
    community: communityReducer,
    
  },
});
