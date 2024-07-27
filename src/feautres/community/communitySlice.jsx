import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeButton: '프로젝트',
    title: '프로젝트',
};

const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers: {
        setActiveButton(state, action) {
            state.activeButton = action.payload;
            state.title = action.payload;
        },
    },
});

export const { setActiveButton } = communitySlice.actions;
export default communitySlice.reducer;
