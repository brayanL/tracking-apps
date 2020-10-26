import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area,
} from 'recharts';
import { Grid } from '@material-ui/core';

import { startDashboard } from '../common/actions';
import { RootState } from '../../store/reducers';

export default function Dashboard() {
    const dispatch = useDispatch();
    const dashboard = useSelector((state: RootState) => state.reports.dashboard);
    const distanceBetweenReport = dashboard.distanceBetween
        .map(({ distanceBetween, month }) => ({ name: month, distanceBetween }));
    const timeTraveledReport = dashboard.timeTraveled
        .map(({ timeTraveled, month }) => ({ name: month, timeTraveled }));
    const tourPerMonthReport = dashboard.tourPerMonth
        .map(({ totalTrips, month }) => ({ name: month, totalTrips }));

    useEffect(() => {
        dispatch(startDashboard());
    }, []);

    return (
        <Grid container direction="row">
            <Grid item xs={6}>
                <Grid container direction="column">
                    <Grid item xs={6}>
                        <BarChart
                            width={600}
                            height={310}
                            data={distanceBetweenReport || []}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="distanceBetween" fill="#82ca9d" barSize={20} />
                        </BarChart>
                    </Grid>
                    <Grid item xs={6}>
                        <BarChart
                            width={600}
                            height={310}
                            data={tourPerMonthReport || []}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="totalTrips" fill="#66ccff" barSize={20} />
                        </BarChart>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={6} alignItems="center">
                <AreaChart
                    width={500}
                    height={400}
                    data={timeTraveledReport}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="timeTraveled" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </Grid>
        </Grid>
    );
}
