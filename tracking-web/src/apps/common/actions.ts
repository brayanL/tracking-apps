import {
    CommonActionTypes, DatesPayload,
    SET_ERROR, START_ADVANCED_REPORTS,
} from './types';

export function startAdvancedReports(dates: DatesPayload): CommonActionTypes {
    return {
        type: START_ADVANCED_REPORTS,
        payload: dates,
    };
}

export function setError(error: string): CommonActionTypes {
    return {
        type: SET_ERROR,
        payload: error,
    };
}
