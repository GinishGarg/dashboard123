import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import { PieChart } from '@mui/x-charts';

// Define the data structure for the chart
const chartData = [
  { id: 'Node A', value: 40 },
  { id: 'Node B', value: 30 },
  { id: 'Node C', value: 20 },
  { id: 'Node D', value: 10 },
];

// Create the PieChart component
const NodeActivityChart: React.FC = () => {
  return (
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: 10, label: 'Active' },
          { id: 1, value: 15, label: 'Inactive' },
          { id: 2, value: 20, label: 'Cancelled' },
        ],
      },
    ]}
    width={400}
    height={200}
  />
  );
};

// Main component that includes the button and chart
const NodeActivityChartButton: React.FC = () => {
  const [showChart, setShowChart] = useState(false);

  const toggleChart = () => {
    setShowChart((prev) => !prev);
  };

  return (
    <Container>
     
      <Button variant="contained" color="primary" onClick={toggleChart}>
        {showChart ? 'Hide Chart' : 'Show Chart'}
      </Button>
      {showChart && <NodeActivityChart />}
    </Container>
  );
};

export default NodeActivityChartButton;