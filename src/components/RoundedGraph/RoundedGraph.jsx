// PieChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const RoundedGraph = () => {
    const data = {
        labels: ['pink', 'skyblue', 'yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [87, 104, 110],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        cutout: '50%', 
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    },
                },
            },
        },
    };

    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default RoundedGraph;
