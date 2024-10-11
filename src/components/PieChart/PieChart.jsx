import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the components and plugin
Chart.register(ArcElement, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: ['900', '800', '700'],
    datasets: [
      {
        data: [900, 800, 700],
        backgroundColor: ['green', 'orange', 'grey'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
      },
      datalabels: {
        color: '#ffffff',
        formatter: (value) => value,
        font: {
          weight: 'bold',
          size: 14,
        },
        anchor: 'center',
        align: 'center',
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
