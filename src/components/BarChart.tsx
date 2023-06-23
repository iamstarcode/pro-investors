'use client'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },

    scales: {

        y: {
            beginAtZero: true,
            grid: {
                offset: true
            },
        },

        x: {
            grid: {
                offset: true
            },
        }
    }

};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function BarChart({ data }: any) {

    const datax = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data[0],
                backgroundColor: '#01257D',
                barThickness: 6,
            },
            {
                label: 'Dataset 2',
                data: data[1],
                backgroundColor: '#C2C2C2',
                barThickness: 6,
            },
        ],
    };

    return <Bar options={options} data={datax} />;
}
