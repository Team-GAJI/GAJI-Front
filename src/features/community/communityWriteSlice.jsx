import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: "",
    body: "",
    thumbnailUrl: "",
    type: "",
    hashtagList: [],
    categoryId: 0
};

const communityWriteSlice = createSlice({
    name: 'communityWrite',
    initialState,
    reducers: {
        setTitle: (state, action) => { state.title = action.payload; },
        setBody: (state, action) => { state.body = action.payload; },
        setThumbnailUrl: (state, action) => { state.thumbnailUrl = action.payload; },
        setType: (state, action) => { state.type = action.payload; },
        setHashtagList: (state, action) => { state.hashtagList = action.payload; },
        setCategoryId: (state, action) => { state.categoryId = action.payload; },
    },
});

export const {
    setTitle, setBody, setThumbnailUrl, setType, setHashtagList, setCategoryId
} = communityWriteSlice.actions;

export default communityWriteSlice.reducer;
