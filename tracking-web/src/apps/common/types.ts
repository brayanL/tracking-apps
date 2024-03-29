export const START_ADVANCED_REPORTS = 'START_ADVANCED_REPORTS';
export const START_GET_DASHBOARD = 'START_GET_DASHBOARD';

// errors
export const SET_ERROR = 'SET_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';
export const RESET_STATE = 'RESET_STATE';

export interface DatesPayload {
    fromDate: string
    toDate: string
}

export interface StartAdvancedReportAction {
    type: typeof START_ADVANCED_REPORTS,
    payload: DatesPayload
}

export interface ShowDashboardAction {
    type: typeof START_GET_DASHBOARD
}

interface ErrorAction {
    type: typeof SET_ERROR
    payload: string
}

interface CloseSessionAction {
    type: typeof RESET_STATE,
}

export type CommonActionTypes = StartAdvancedReportAction | ErrorAction | ShowDashboardAction | CloseSessionAction;
