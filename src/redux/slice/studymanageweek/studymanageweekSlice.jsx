import { createSlice } from '@reduxjs/toolkit';
import { assignmentsAPI } from '../../../pages/study-manage-week/api/assignmentsAPI';

// studyWeekSlice.js
const initialState = {
    weeksData: [],
    taskData: [],
    periodDate: [],
    assignmentsDate: [],
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
