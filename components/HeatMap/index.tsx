'use client';

import HeatMap from '@uiw/react-heat-map';

import { addYears, endOfMonth, format, startOfMonth, subYears } from 'date-fns';

const currentDate = new Date();
const startDate = subYears(startOfMonth(currentDate), 1);
const endDate = endOfMonth(currentDate);

const PostHeatMap = ({ datas }: { datas: any[] }) => {
  const dateRange = [];
  let currentDatePointer = startDate;
  while (currentDatePointer <= endDate) {
    dateRange.push(format(currentDatePointer, 'yyyy-MM-dd'));
    currentDatePointer = addYears(currentDatePointer, 1);
  }

  const postCounts = {}; // 统计每天的帖子数目
  const data = dateRange.map((date) => {
    // @ts-ignore
    return { date, count: [new Date(date), postCounts[date] || 0] };
  });

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

  console.log(JSON.stringify(data));

  return (
    <div>
      <HeatMap
        value={data}
        weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
        startDate={startDate}
        endDate={endDate}
        width="100%"
        rectSize={15}
        rectProps={{
          rx: 2,
        }}
      />
    </div>
  );
};

export default PostHeatMap;
