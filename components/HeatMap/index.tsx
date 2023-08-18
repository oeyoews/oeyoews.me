'use client';

import { useEffect } from 'react';

import CalHeatMap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
// @ts-ignore
import Tooltip from 'cal-heatmap/plugins/Tooltip';

const CalHeatmapComponent = () => {
  const cal = new CalHeatMap();
  const data = [
    { date: '2023-01-01', value: 3 },
    { date: '2023-08-02', value: 6 },
  ];

  useEffect(() => {
    cal.paint(
      {
        data: {
          source: data,
        },
        date: { start: new Date('2023-01-01') },
        range: 12,
        scale: {
          color: {
            type: 'threshold',
            range: ['#14432a', '#166b34', '#37a446', '#4dd05a'],
            domain: [10, 20, 30],
          },
        },
        domain: {
          type: 'month',
          gutter: 4,
          label: { text: 'MMM', textAlign: 'start', position: 'top' },
        },
        subDomain: {
          type: 'ghDay',
          radius: 2,
          width: 11,
          height: 11,
          gutter: 4,
        },
        // itemSelector: '#ex-ghDay',
      },
      [[Tooltip]],
    );
  }, []);

  return <div id="cal-heatmap"></div>;
};

export default CalHeatmapComponent;
