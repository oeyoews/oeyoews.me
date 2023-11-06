'use client';

import { useEffect, useState } from 'react';
import { FcFolder } from 'react-icons/fc';

import Link from 'next/link';

import CalendarHeatmapComponent from '@/components/CalendarPost';
import EmptyPost from '@/components/PostList/EmptyPost';
import Badge from '@/components/PostList/PostBadges';
import YearHeader from '@/components/PostList/YearHeader';

import formattedTime from '@/lib/formattedTime';
import getTiddlerData from '@/lib/getTiddlerData';
import useStore from '@/lib/store';
import { format } from 'date-fns';
import { toast } from 'sonner';

function TiddlerItem({ tiddler, index }: { tiddler: Tiddler; index: number }) {
  const { title, slug, created } = tiddler;
  return (
    <li className="ml-6 group my-8">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 bg-white">
        <FcFolder className="h-4 w-4 text-gray-400 duration-300 transition-all group-hover:stroke-indigo-500" />
      </span>
      <Link
        href={`/tiddlers/${slug}`}
        className="text-xs rounded-md"
        title="点击阅读全文"
      >
        <h2 className="text-neutral-700 hover:text-neutral-950 duration-300 transition my-2">
          {title}
          {index === 0 && (
            <Badge className="bg-green-300 font-bold" text="Latest" />
          )}
        </h2>
      </Link>
      <time className="block text-sm font-normal leading-none text-gray-400">
        {format(new Date(formattedTime(created)), 'EEE, MMMM d')}
      </time>
    </li>
  );
}

export default function HomePage() {
  const tiddlerstore = useStore();
  const [data, setData] = useState<Tiddler[]>([]);

  function TiddlersList({ tiddlers }: { tiddlers: Tiddler[] }) {
    let currentYear: number;
    return (
      <ol className="prose relative list-none border-gray-100/80 border-l-4">
        {tiddlers.slice(0, tiddlerstore.loadedItems).map((tiddler, index) => {
          const { title, created } = tiddler;
          const postYear = new Date(formattedTime(created)).getFullYear();

          const yearHeader =
            currentYear !== postYear ? (
              <YearHeader postYear={postYear} />
            ) : null;

          currentYear = postYear;

          return (
            <article key={title}>
              {yearHeader}
              <TiddlerItem tiddler={tiddler} index={index} />
            </article>
          );
        })}
      </ol>
    );
  }

  const handleLoadMore = () => {
    if (data.length < tiddlerstore.loadedItems) {
      toast.error('没有更多了');
      return;
    }
    tiddlerstore.setLoadedItems(tiddlerstore.loadedItems + 10);
    toast.success('加载成功');
  };

  const [hasloaded, setHasloaded] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      return getTiddlerData()
        .then((data) => {
          setData(data);
        })
        .then(() => {
          setHasloaded(true);
        });
    };
    fetchData().then(() => {
      // hasloaded && toast.success('加载成功');
    });
  }, []);

  // if (!data.length) {
  //   return <EmptyPost />;
  // }

  return (
    <>
      <CalendarHeatmapComponent datas={data} />
      <TiddlersList tiddlers={data} />

      {data.length > tiddlerstore.loadedItems && (
        <button
          onClick={handleLoadMore}
          className="text-sm font-medium text-neutral-600 hover:text-neutral-800 bg-neutral-200 rounded px-2 font-mono py-1"
        >
          加载更多
        </button>
      )}
    </>
  );
}
