import { configureStore } from "@reduxjs/toolkit";
import communityReducer from "../features/community/communitySlice";
import studyCreateReducer from "../features/study/studyCreateSlice";

export const store = configureStore({
  reducer: {
    community: communityReducer,
    studyCreate: studyCreateReducer,
  },
});
