import { call, put, takeLatest } from 'redux-saga/effects';
import { START_ADVANCED_REPORTS } from '../../common/actions';
import api from '../../../utils/Api';
import { showAdvancedReport } from '../slices/reportsSlice';

const fetchAdvancedReports = () => api.get(process.env.REACT_APP_BASE_URL!
    .concat('/reports/tours/range-date'), { params: { fromDate: '2020-07-24T01:45:00', toDate: '2020-07-24T02:55:00' } });

function* advancedReportsSaga() {
    try {
        const response = yield call(fetchAdvancedReports);
        yield put(showAdvancedReport(response.data));
    } catch (e) {
        console.log('error: ', e);
    }
}

export function* watchAdvancedReports() {
    yield takeLatest(START_ADVANCED_REPORTS, advancedReportsSaga);
}
