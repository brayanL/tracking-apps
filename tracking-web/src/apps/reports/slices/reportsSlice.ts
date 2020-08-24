import { createSlice } from '@reduxjs/toolkit';

interface AdvancedReportState {
    advanced: Array<object>,
    dashboard: Object,
}

const initialState: AdvancedReportState = {
    advanced: [],
    dashboard: {},
};

const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        showAdvancedReport(state, action) {
            state.advanced = action.payload;
        },
        showDashboard(state, action) {
            state.dashboard = action.payload;
        },
    },
});

export const { showAdvancedReport, showDashboard } = reportsSlice.actions;
export default reportsSlice.reducer;
