import { configureStore } from "@reduxjs/toolkit";
import communityReducer from "../features/community/communitySlice";
import studyCreateReducer from "../features/study/studyCreateSlice";
import communityWriteReducer from "../features/community/communityWriteSlice";

export const store = configureStore({
  reducer: {
    community: communityReducer,
    studyCreate: studyCreateReducer,
    communityWrite: communityWriteReducer,
  },
});
