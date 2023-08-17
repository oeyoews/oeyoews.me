'use client';

import { Line } from 'react-chartjs-2';

import { useRouter } from 'next/navigation';

import { allPosts } from '@/.contentlayer/generated';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { format } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function PostChart() {
  const router = useRouter();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Posts',
      },
      tooltip: {
        callbacks: {
          label: function (context: { label: any; raw: any }) {
            const label = context.label;
            const value = context.raw;

            // 获取对应日期的所有文章标题
            const postsOnDate = allPosts.filter(
              (post) => format(new Date(post.date), 'yyyy-MM-dd') === label,
            );
            if (postsOnDate.length > 0) {
              const titles = postsOnDate.map((post) => post.title).join('\n'); // 换行符
              return `${value}篇文章\n${titles}`;
            } else {
              return `${value}篇文章`;
            }
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // 不显示x轴的网格线
        },
        // position: 'center', // 将横坐标标签放在纵坐标区域的中间
      },
      y: {
        grid: {
          display: false, // 不显示y轴的网格线
        },
        ticks: {
          stepSize: 1, // 设置纵坐标的间隔为整数
          // TODO: not work
          reverse: true, // 纵坐标从顶部开始
        },
      },
    },
    onClick: (event: any, elements: string | any[]) => {
      if (elements.length > 0) {
        const clickedIndex = elements[0].index;

        // 使用 clickedIndex 找到对应日期的文章
        const selectedDate = labels[clickedIndex]; // 根据点击的索引找到对应的日期
        const selectedPosts = allPosts.filter(
          (post) => format(new Date(post.date), 'yyyy-MM-dd') === selectedDate,
        );

        if (selectedPosts.length > 0) {
          // 假设文章的 URL 格式为 "/posts/:postId"
          const postId = selectedPosts[0].slug;
          const url = `${postId}`;
          router.push(url);
        }
      }
    },
  };

  // 对日期进行排序并去重
  const labels = Array.from(
    new Set(
      allPosts
        .sort((a, b) => {
          return b.date > a.date ? -1 : 1;
        })
        .map((post) => format(new Date(post.date), 'yyyy-MM-dd')),
    ),
  );

  const postCounts = {}; // 统计每天的文章数量
  allPosts.forEach((post) => {
    const date = format(new Date(post.date), 'yyyy-MM-dd');
    if (date in postCounts) {
      // @ts-ignore
      postCounts[date]++;
    } else {
      // @ts-ignore
      postCounts[date] = 1;
    }
  });

  const data = {
    labels,
    datasets: [
      {
        label: `${allPosts.length} 篇文章`,
        // @ts-ignore
        data: labels.map((label) => postCounts[label] || 0), // 使用统计的文章数量作为数据
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
