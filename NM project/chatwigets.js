// src/components/ChartWidget.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartWidget = ({ data, options }) => {
  return (
    <div>
      <h4>Statistics</h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartWidget;
