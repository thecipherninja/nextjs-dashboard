import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import axios from 'axios';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/percentdata');
        const data = response.data;

        // Extract the values and labels from the fetched data
        const values = data.map((item) => item.value);
        const labels = ["Basic Tees", "Custom Short Pants", "Super Hoodies"];

        // Create a chart using Chart.js
        const chart = new Chart(chartRef.current, {
          type: 'pie',
          data: {
            datasets: [
              {
                data: values,
                backgroundColor: [
                  '#F6DC7D',
                  '#EE8484',
                  '#98D89E',
                ],
              },
            ],
            labels: labels,
          },
          options: {
            responsive: true,
            aspectRatio: 397 / 150,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  usePointStyle: true,
                  font: {
                    size: 12,
                  },
                  formatter: (value, context) => {
                    const datasetIndex = context.datasetIndex;
                    const dataIndex = context.dataIndex;
                    const dataset = context.chart.data.datasets[datasetIndex];
                    const total = dataset.data.reduce((acc, val) => acc + val, 0);
                    const percentage = ((dataset.data[dataIndex] / total) * 100).toFixed(2);

                    return `${labels[dataIndex]} (${percentage}%)`;
                  },
                },
              },
            },
            elements: {
              arc: {
                borderWidth: 0,
                borderColor: 'transparent',
              },
            },
            layout: {
              padding: {
                top: 20,
                bottom: 20,
              },
            },
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <canvas ref={chartRef} width={397} height={150} />;
};

export default PieChart;
