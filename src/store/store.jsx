import { configureStore } from "@reduxjs/toolkit";
import communityReducer from "../feautres/community/communitySlice";
import studyCreateReducer from "../feautres/study/studyCreateSlice";

export const store = configureStore({
  reducer: {
    community: communityReducer,
    studyCreate: studyCreateReducer,
  },
});
