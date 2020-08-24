import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startDashboard } from '../common/actions';

export default function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startDashboard());
    }, []);

    return (
        <p>Here from Dashboard</p>
    );
}
