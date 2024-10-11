import React from 'react'
import { CategoryScale, Chart as ChartJs, LineElement, LinearScale, PointElement} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJs.register(LineElement,CategoryScale,LinearScale,PointElement)

export default React.memo(function LineGraph() {
    const data = {
        labels : ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
        datasets: [
            {
                label : 'green',
                data: [8,9,10,1,10,15, 10, 10],
                borderColor: 'green',
                tension: 0.5
            },
            {
                label: 'skyblue',
                data: [9,10,14,13, 5,8, 20, 15, 10],
                borderColor: 'skyblue',
                tension: 0.5
            },
            {
                label:'orange',
                data: [1,15,10,20,14,18, 14, 15],
                borderColor: 'orange',
                tension: 0.5
            }
        ]
    };
    const options ={
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
              type: 'category', 
              labels : ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
              grid: {
                display: false, 
              },
              border: {
                display: true
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false, 
                borderColor: 'transparent'
              },
              ticks: {
                display: true
              },
              border: {
                display: true
              }
            },
          },
          plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
            }
        },
    }
  return (
    <div>
        <Line data={data} options={options}></Line>
    </div>
  )
}
)