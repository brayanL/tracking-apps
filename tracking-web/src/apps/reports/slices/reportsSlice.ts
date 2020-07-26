import { createSlice } from '@reduxjs/toolkit';

interface AdvancedReportState {
    advanced: Array<object>,
}

const initialState: AdvancedReportState = {
    advanced: [],
};

const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        showAdvancedReport(state, action) {
            state.advanced = action.payload;
        },
    },
});

export const { showAdvancedReport } = reportsSlice.actions;
export default reportsSlice.reducer;
