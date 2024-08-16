import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: "",
    body: "",
    thumbnailUrl: "",
    type: "",
    hashtagList: [],
    categoryIdList: []
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
        setCategoryIdList: (state, action) => { state.categoryIdList = action.payload; },
    },
});

export const {
    setTitle, setBody, setThumbnailUrl, setType, setHashtagList, setCategoryIdList
} = communityWriteSlice.actions;

export default communityWriteSlice.reducer;
