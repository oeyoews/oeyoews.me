'use client';

//add button to next/previous year
// NOTE: 273kb
// 如何调整大小
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { Suspense } from 'react';

import { useRouter } from 'next/navigation';

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
  const postCounts: DataObject = {};

  datas.forEach((post) => {
    const date = format(new Date(post.date), 'yyyy-MM-dd');
    if (date in postCounts) {
      postCounts[date].count++;
      postCounts[date].titles.push(post.title);
    } else {
      postCounts[date] = { count: 1, titles: [post.title] };
    }
  });
  // console.log(JSON.stringify(postCounts, null, 2));

  let data = Object.entries(postCounts).map(([date, info]) => {
    // 其实是一个二维数组
    return [date, info.count];
    // return {
    //   name: date,
    //   value: [date, info.count],
    // };
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
    },
    tooltip: {
      position: 'top',
      formatter: function (params: any) {
        const date = params.value[0];
        const count = params.value[1];
        // @ts-ignore
        const matchingTitles = [];

        // 查找匹配日期和帖子数的标题
        datas.forEach((post) => {
          if (format(new Date(post.date), 'yyyy-MM-dd') === date) {
            matchingTitles.push(post.title);
          }
        });

        let titlesText = '无'; // 默认为无标题

        if (matchingTitles.length === 1) {
          // @ts-ignore
          titlesText = matchingTitles[0]; // 如果只有一个标题，直接使用
        } else if (matchingTitles.length > 1) {
          // @ts-ignore
          titlesText = matchingTitles.join(', '); // 多个标题用换行分隔
        }

        return `日期：${date}<br/>帖子数：${count}<br/>文章标题：${titlesText}`;
      },
    },
    visualMap: {
      min: 0,
      max: 100,
      show: false,
      type: 'piecewise',
      orient: 'horizontal',
      calculable: true,
      showLabel: true,
      right: 0,
      top: 175,
      pieces: [
        // 设置分段范围
        { lte: 0, color: '#EBEDF0' },
        { gt: 0, lte: 1, color: '#D3CCF2' },
        { gt: 1, lte: 5, color: '#B3A9F2' },
        { gt: 5, lte: 16, color: '#9087F2' },
        { gt: 16, color: '#6366F1' },
      ],
    },
    calendar: {
      top: 60,
      left: 0,
      right: 0,
      cellSize: 15,
      orient: 'horizontal', // TODO: vertical(not fit)
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
        pointSize: 20,
        itemStyle: {
          borderRadius: 3,
        },
      },
    ],
  };
  const router = useRouter();
  const onEvents = {
    click: (params: any) => {
      datas.forEach((post) => {
        if (format(new Date(post.date), 'yyyy-MM-dd') === params.data[0]) {
          router.push(`${post.slug}`);
        }
      });
    },
  };

  return (
    <Suspense fallback={<div>🌀 Loading...</div>}>
      <ReactEChartsCore echarts={echarts} option={option} onEvents={onEvents} />
    </Suspense>
  );
}

export default CalendarHeatmapComponent;
