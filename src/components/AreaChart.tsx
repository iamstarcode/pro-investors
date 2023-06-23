'use client'

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    Colors
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { DatasetChartOptions, ControllerDatasetOptions, DatasetControllerChartComponent, ChartOptions } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    Colors
);

ChartJS.defaults.color = '#FFF';

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        y: {

            grid: {
                color: "#FFF"
            }
        },
        x: {

            grid: {
                color: "#FFF"
            }
        }
    },
};

const labels = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', "FRI", "SAT", "SUN"];



export default function Chart({ data }: any) {

    const datax = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Blissfull Baker',
                data,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(201, 203, 207)',
            }
        ],
    };
    return <Line options={options} data={datax} />;
}
