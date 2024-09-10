import { configureStore } from "@reduxjs/toolkit";
import communitySlice from "../slice/community/communitySlice";
import studyCreateSlice from "../slice/study/studyCreateSlice";
import communityWriteSlice from "../slice/community/communityWriteSlice";

export const store = configureStore({
  reducer: {
    community: communitySlice,
    studyCreate: studyCreateSlice,
    communityWrite: communityWriteSlice,
  },
});
