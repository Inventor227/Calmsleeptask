import React, { useState, useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const BarGraph = ({ audioData }) => {
  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      width: '300',
height:'300'
    },
    plotOptions: {
            bar: {
              columnWidth: '20%',
              colors: {
                ranges: [{
                  from: 0,
                  to: audioData.length,
                  color: '#FFFFFF'
                }]
              }
            }
          },
    series: [{
      name: 'UniquePlays',
      data: audioData,
    }],
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      labels: {
        style: {
          colors: '#FFFFFF',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#FFFFFF',
          fontSize: '12px'
        }
      }
    },

  });

  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [options, audioData]);

  return (
    <div class="graph" ref={chartRef} />
  );
};

export default BarGraph;
