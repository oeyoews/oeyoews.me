'use client';

import ReactECharts from 'echarts-for-react';

import { format } from 'date-fns';

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

  const option = {
    tooltip: {
      position: 'top',
    },
    visualMap: {
      min: 0, // @ts-ignore
      max: Math.max(...Object.values(postCounts)),
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
    },
    calendar: {
      top: 60,
      left: 0,
      right: 0,
      cellSize: 15,
      orient: 'horizontal',
      itemStyle: {
        borderWidth: 3,
        borderCap: 'round',
        borderJoin: 'round',
        borderColor: '#ccc',
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
