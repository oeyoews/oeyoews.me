'use client';

import ReactEChartsCore from 'echarts-for-react/lib/core';

import { addYears, endOfMonth, format, startOfMonth, subYears } from 'date-fns';
import { HeatmapChart } from 'echarts/charts';
import {
  CalendarComponent,
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import {
  // CanvasRenderer,
  SVGRenderer,
} from 'echarts/renderers';

echarts.use([
  CalendarComponent,
  HeatmapChart,
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  SVGRenderer,
  VisualMapComponent,
]);

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
    return { name: date, value: [new Date(date), `${count}`] };
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
    title: {
      text: `共有 ${datas.length} 篇文章`,
      left: 'center',
      margin: 8,
      position: 'bottom',
    },
    tooltip: {
      position: 'top',
      // formatter:
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
        { gt: 0, lte: 1, color: '#39D353' },
        { gt: 2, lte: 4, color: '#006D32' },
        { gt: 5, lte: 15, color: '#26A641' },
        { gt: 16, color: '#0E4429' },
      ],
    },
    calendar: {
      emptyItemStyle: {
        color: 'red',
        borderWidth: 0.5, // 可根据需要调整
        borderType: 'dashed', // 可根据需要调整
      },
      top: 60,
      left: 0,
      right: 0,
      cellSize: 15,
      orient: 'horizontal', // vertical(not fit)
      range: [startDate, endDate],
      splitLine: {
        show: false,
        lineStyle: {
          color: ['#ccc'],
          width: 1,
          type: 'solid',
        },
      },
      itemStyle: {
        borderWidth: 3,
        borderCap: 'round',
        borderJoin: 'round',
        borderColor: 'white',
        color: '#EBEDF0',
      },
      yearLabel: {
        show: true,
        position: 'bottom',
        margin: 32,
        verticalAlign: 'top',
      },
      dayLabel: {
        margin: 15,
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

  return <ReactEChartsCore echarts={echarts} option={option} />;
}

export default CalendarHeatmapComponent;
