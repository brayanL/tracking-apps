import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { startAdvancedReports } from '../../common/actions';
import { RootState } from '../../../store/reducers';

export default function ReportAdvanced() {
    const [selectedDateFrom, setDateFrom] = React.useState<MaterialUiPickersDate>(new Date());
    const [selectedDateTo, setDateTo] = React.useState<MaterialUiPickersDate>(new Date());

    const reportsData = useSelector((state: RootState) => state.reports.advanced);
    const tableData = JSON.parse(JSON.stringify(reportsData));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startAdvancedReports());
    }, []);

    return (
        <Grid container spacing={4} direction="column">
            <Grid item xs={12}>
                <Typography variant="h5">Reporte Personalizado</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={4}>
                        <KeyboardDatePicker
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            label="Desde"
                            format="dd/MM/yyyy"
                            value={selectedDateFrom}
                            onChange={(date) => setDateFrom(date)}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <KeyboardDatePicker
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            label="Hasta"
                            format="dd/MM/yyyy"
                            value={selectedDateTo}
                            onChange={(date) => setDateTo(date)}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <div style={{ flex: 1, maxWidth: '100%' }}>
                    <MaterialTable
                        title="Tours"
                        columns={[
                            { title: 'Id', field: 'tourId', type: 'numeric' },
                            { title: 'Inicio', field: 'timeStart' },
                            { title: 'Fin', field: 'timeFinish' },
                            { title: 'Tiempo Recorrido', field: 'timeTravel' },
                        ]}
                        data={tableData}
                        options={{
                            search: false,
                            draggable: false,
                            exportButton: true,
                            rowStyle: (x) => {
                                if (x.tableData.id % 2) {
                                    return { backgroundColor: '#c4d9f2', color: '#518CBF' };
                                }
                                return { color: '#518CBF' };
                            },
                        }}
                    />
                </div>
            </Grid>
        </Grid>
    );
}
