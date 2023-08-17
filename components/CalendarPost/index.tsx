'use client';

import ReactECharts from 'echarts-for-react';

import { addYears, endOfMonth, format, startOfMonth, subYears } from 'date-fns';

function CalendarHeatmapComponent({ datas }: { datas: any[] }) {
  const postCounts = {}; // 统计每天的帖子数目

  // 统计每天的帖子数目
  datas.forEach((post) => {
    const date = format(new Date(post.date), 'yyyy-MM-dd');
    if (date in postCounts) {
      // @ts-ignore
      postCounts[date]++;
    } else {
      // @ts-ignore
      postCounts[date] = 1;
    }
  });

  const data = Object.entries(postCounts).map(([date, count]) => {
    return { name: date, value: [new Date(date), count] };
  });

  const currentDate = new Date();
  const startDate = subYears(startOfMonth(currentDate), 1);
  const endDate = endOfMonth(currentDate);
  const dateRange = [];
  let currentDatePointer = startDate;
  while (currentDatePointer <= endDate) {
    dateRange.push(format(currentDatePointer, 'yyyy-MM-dd'));
    currentDatePointer = addYears(currentDatePointer, 1);
  }

  const option = {
    tooltip: {
      position: 'top',
    },
    visualMap: {
      type: 'piecewise',
      orient: 'horizontal',
      calculable: true,
      showLabel: false,
      right: 0,
      top: 175,
      pieces: [
        // 设置分段范围
        { lte: 0, color: '#EBEDF0' },
        { gt: 0, lte: 1, color: '#0E4429' },
        { gt: 2, lte: 4, color: '#006D32' },
        { gt: 5, lte: 15, color: '#26A641' },
        { gt: 16, color: '#39D353' },
      ],
    },
    calendar: {
      top: 60,
      left: 0,
      right: 0,
      cellSize: [15, 15],
      orient: 'horizontal',
      range: [startDate, endDate],
      itemStyle: {
        borderWidth: 0.5,
        borderCap: 'round',
        borderJoin: 'round',
        borderColor: '#ccc',
      },
      yearLabel: {
        show: true,
        position: 'top',
        margin: 32,
        verticalAlign: 'top',
      },
    },
    series: [
      {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data,
      },
    ],
  };

  return <ReactECharts option={option} />;
}

export default CalendarHeatmapComponent;
