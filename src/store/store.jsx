import { configureStore } from "@reduxjs/toolkit";
import communityReducer from "../feautres/community/communitySlice";
import studyCreateReducer from "../feautres/study/studyCreateSlice";
import communityWriteReducer from "../feautres/community/communityWriteSlice";

export const store = configureStore({
  reducer: {
    community: communityReducer,
    studyCreate: studyCreateReducer,
    communityWrite: communityWriteReducer,
  },
});
