import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

export default function Linechart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 1: Fetch JSON data from the first API using Axios
        const response1 = await axios.get('api/curvedata');
        // Step 2: Extract x and y values from the first API response
        const graphPoints1 = response1.data;
        const xValues1 = graphPoints1.map((point, index) => {
          if ((index + 1) % 7 === 0 && index !== graphPoints1.length - 1) {
            return `Week ${Math.ceil((index + 1) / 7)}`;
          }
          return '';
        });
        const yValues1 = graphPoints1.map(point => point.y);

        // Step 3: Fetch JSON data from the second API using Axios
        const response2 = await axios.get('api/curvedata2');
        // Step 4: Extract x and y values from the second API response
        const graphPoints2 = response2.data;
        const xValues2 = graphPoints2.map((point, index) => {
          if ((index + 1) % 7 === 0 && index !== graphPoints2.length - 1) {
            return `Week ${Math.ceil((index + 1) / 7)}`;
          }
          return '';
        });
        const yValues2 = graphPoints2.map(point => point.y);

        // Step 5: Create Chart.js line graph
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: xValues1, // Use xValues from the first API for labels
            datasets: [
              {
                label: 'Guest',
                data: yValues1,
                borderColor: '#E9A0A0',
                borderWidth: 3,
                pointRadius: 0,
                fill: false
              },
              {
                label: 'User',
                data: yValues2,
                borderColor: '#9BDD7C',
                borderWidth: 3,
                pointRadius: 0,
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  maxRotation: 0,
                  autoSkip: false
                }
              },
              y: {
                beginAtZero: true,
                max: 500,
                ticks: {
                  stepSize: 100
                }
              }
            },
            plugins: {
              legend: {
                align: 'end',
                position: 'top',
                labels: {
                  usePointStyle: true
                }
              }
            }
          }
        }
        );
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: '282px', width: '921px' }}>
      <canvas ref={chartRef} height="282" width="921"></canvas>
    </div>
  );
}
