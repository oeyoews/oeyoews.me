'use client';

import ReactEChartsCore from 'echarts-for-react/lib/core';

import type { Route } from 'next';
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
import { SVGRenderer } from 'echarts/renderers';
import Drag from '~ui/motion/Drag';

echarts.use([
  CalendarComponent,
  HeatmapChart,
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  SVGRenderer,
  VisualMapComponent,
]);

function CalendarHeatmapComponent({
  datas,
}: {
  datas: any[] | TiddlerMetadata[] | Issue[];
}) {
  const postCounts: DataObject = {};

  // if (!datas.length) return;
  datas.forEach((post) => {
    const date = format(new Date(post.date), 'yyyy-MM-dd');
    if (date in postCounts) {
      postCounts[date].count++;
      postCounts[date].titles.push(post.title);
    } else {
      postCounts[date] = { count: 1, titles: [post.title] };
    }
  });

  let data = Object.entries(postCounts).map(([date, info]) => {
    return [date, info.count];
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
      text: `共有 ${datas.length.toLocaleString()} 篇文章`,
      left: 'center',
      textStyle: {
        fontSize: 16,
      },
    },
    tooltip: {
      position: 'top',
      formatter: function (params: { value: string[] }) {
        const date = params.value[0];
        const count = params.value[1];
        const matchingTitles: string[] = [];

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
      orient: 'horizontal',
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
    dblclick: (params: { data: string[] }) => {
      datas.forEach((post) => {
        if (format(new Date(post.date), 'yyyy-MM-dd') === params.data[0]) {
          router.push(`${post.slug as Route}`);
        }
      });
    },
  };

  return (
    <Drag>
      {/* onEvents={onEvents} */}
      <ReactEChartsCore
        echarts={echarts}
        option={option}
        className="hidden md:block md:w-[880px]"
      />
    </Drag>
  );
}

export default CalendarHeatmapComponent;
