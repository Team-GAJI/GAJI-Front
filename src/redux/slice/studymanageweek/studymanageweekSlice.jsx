import { createSlice } from '@reduxjs/toolkit';

// studyWeekSlice.js
const initialState = {
    weeksData: [],
};

const studyWeekSlice = createSlice({
    name: 'studyWeek',
    initialState,
    reducers: {
        setWeekData: (state, action) => {
            const { weekIndex, weekData } = action.payload;
            state.weeksData[weekIndex] = weekData;
        },
        deleteWeekData: (state, action) => {
            const { weekIndex } = action.payload;
            state.weeksData.splice(weekIndex, 1); // 주차 삭제
        },
    },
});

export const { setWeekData, deleteWeekData } = studyWeekSlice.actions;
export default studyWeekSlice.reducer;
