'use client';

import { useEffect } from 'react';

import CalHeatMap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
// @ts-ignore
import CalendarLabel from 'cal-heatmap/plugins/CalendarLabel';
// @ts-ignore
import LegendLite from 'cal-heatmap/plugins/LegendLite';
// @ts-ignore
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import { format } from 'date-fns';

const CalHeatmapComponent = ({ posts }: { posts: any }) => {
  const cal = new CalHeatMap();
  const data: HeatMapData[] = [];

  const postCountsByDate: PostCountData = {};

  posts.forEach((post: any) => {
    const date = format(new Date(post.date), 'yyyy-MM-dd');

    if (postCountsByDate[date]) {
      postCountsByDate[date]++;
    } else {
      postCountsByDate[date] = 1;
    }
  });

  for (const date in postCountsByDate) {
    data.push({ date, count: postCountsByDate[date] });
  }

  useEffect(() => {
    cal.paint(
      {
        data: {
          source: data as any,
          x: 'date',
          y: 'count',
        },
        // TODO
        date: { start: new Date('2023-01-01') },
        range: 12,
        scale: {
          color: {
            type: 'threshold',
            range: ['#14432a', '#166b34', '#37a446', '#4dd05a'],
            domain: [1, 2, 3],
          },
        },
        verticalOrientation: false,
        domain: {
          type: 'month',
          gutter: 4,
          label: { text: 'MMM', textAlign: 'start', position: 'top' },
        },
        subDomain: {
          type: 'ghDay',
          radius: 1,
          width: 15,
          height: 15,
          gutter: 4,
        },
      },
      [
        [
          Tooltip,
          {
            // @ts-ignore
            text: function (date, value, dayjsDate) {
              return (
                (value ? value : 'No') +
                ' articles on ' +
                format(new Date(dayjsDate), 'EEE MMMM d, yyyy')
              );
            },
          },
        ],
        [
          CalendarLabel,
          {
            // @ts-ignore
            width: 30,
            textAlign: 'start',
            text: () => ['', 'Mon', ' ', 'Wed', '', 'Fri'],
            padding: [25, 0, 0, 0],
          },
        ],
        [
          LegendLite,
          {
            // @ts-ignore
            includeBlank: true,
            itemSelector: '#ex-ghDay-legend',
            radius: 1,
            width: 15,
            height: 15,
            gutter: 4,
          },
        ],
      ],
    );
  }, []);

  return (
    <div className="">
      <h1 className="font-semibold my-2">共有 {posts.length} 篇文章</h1>
      {/* heatmap */}
      <div id="cal-heatmap" className="w-24"></div>
      {/* year */}
      {/* <div>
        <a
          className="button button--sm button--secondary margin-top--sm"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            cal.previous();
          }}
        >
          ← Previous
        </a>
        <a
          className="button button--sm button--secondary margin-top--sm margin-left--xs"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            cal.next();
          }}
        >
          Next →
        </a>
      </div> */}
      <div className="float-right my-4">
        <span className="text-gray-400 text-xs mr-1">Less</span>
        <div
          id="ex-ghDay-legend"
          style={{ display: 'inline-block', margin: '0 4px' }}
        ></div>
        <span className="text-gray-400 text-xs ml-1">More</span>
      </div>
    </div>
  );
};

export default CalHeatmapComponent;
