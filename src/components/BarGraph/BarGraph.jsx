import React from 'react'
import { BarElement, CategoryScale, Chart as ChartJs, Legend, LinearScale, Tooltip, } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJs.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

export default React.memo(function BarGraph() {
    const data = {
        labels: ['DDN', 'FBD', 'INT', 'MRD' , 'PVI', 'SIS', 'SLO', 'VND'],
        datasets: [
            {
                label: "Weekly Status",
                backgroundColor: ['green'],
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: [10000, 5000, 3000, 10000, 7000, 12000, 9000, 15000, 6000, 8000, 4000],
                borderRadius: 50
            },
            {
                label: "Weekly Status",
                backgroundColor: ['orange'],
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: [7000, 3000, 2500, 9000, 5000, 11000, 7000, 13000, 5500, 7500, 3500],
                borderRadius: 50
            },
            {
                label: "Weekly Status",
                backgroundColor: ['grey'],
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: [1000, 7000, 5500, 3000, 8000, 2000, 9000, 1000, 3000, 6000, 4500],
                borderRadius: 50
            }
        ]
    };
    
    const options ={
        scales: {
            x: {
              type: 'category', 
              grid: {
                display: false, 
              },
              border: {
                display: true
              },
              barThickness: 50
            },
            y: {
              beginAtZero: true,
              grid: {
                display: true, 
              },
              ticks: {
                display: true,
              },
              ticks: {
                display: true,
            },
              border: {
                display: false
              }
            },
          },
          plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            datalabels: {
                display: false,
            },
        
        }
    }
    
  return (
    <div style={{}} className='h-100'>
        <Bar className='w-100' data={data} options={options}></Bar>
    </div>
  )
})
