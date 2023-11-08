'use client';

import { useEffect, useState } from 'react';

import CalendarHeatmapComponent from '@/components/CalendarPost';
import YearHeader from '@/components/PostList/YearHeader';
import TiddlerItem from '@/components/TiddlerItem';

import getTiddlerData from '@/lib/getTiddlerData';
import useStore from '@/lib/store';
import { toast } from 'sonner';

export default function TiddlersList() {
  const tiddlerstore = useStore();
  const [data, setData] = useState<Tiddler[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [initialData, setIntialData] = useState<Tiddler[]>([]);
  function TiddlersList({ tiddlers }: { tiddlers: Tiddler[] }) {
    // if (!tiddlers.length) return;
    let currentYear: number;
    return (
      <ol className="prose relative list-none border-gray-100/80 border-l-4">
        {tiddlers.slice(0, tiddlerstore.loadedItems).map((tiddler, index) => {
          const { title, date } = tiddler;
          const postYear = new Date(date).getFullYear();

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
    tiddlerstore.setLoadedItems(tiddlerstore.loadedItems + 30);
    toast.success('加载成功');
  };

  const [hasloaded, setHasloaded] = useState(false);
  const fetchData = async () => {
    const data = await getTiddlerData();
    setData(data);
    setIntialData(data);
    setHasloaded(true);
  };

  const handleSearchChange = (event: any) => {
    const newsearchTerm = event.target.value;
    setSearchTerm(newsearchTerm);
  };

  useEffect(() => {
    if (!searchTerm) {
      setData(initialData);
      return;
    }
    const filteredData = data.filter((tiddler) =>
      tiddler.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    if (!filteredData.length) return;
    setData(filteredData);
  }, [searchTerm]); // 不要加额外的依赖

  useEffect(() => {
    fetchData();
  }, []);

  // if (!data.length) {
  //   return <EmptyPost />;
  // }

  return (
    hasloaded && (
      <div>
        <CalendarHeatmapComponent datas={data} />
        <input
          className="w-full focus:ring-2 focus:ring-indigo-500 outline-indigo-400 focus:ring-opacity-50 rounded px-2 font-mono py-1"
          autoFocus={true}
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Tiddlers (online)"
        />
        {/* {!data.length && (
          <div className="font-mono my-4 text-lg flex justify-center items-center">
            <h1>Nothing</h1>
          </div>
        )} */}
        <TiddlersList tiddlers={data} />
        {data.length > tiddlerstore.loadedItems && (
          <button
            onClick={handleLoadMore}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-800 bg-neutral-200 rounded px-2 font-mono py-1"
          >
            加载更多
          </button>
        )}
      </div>
    )
  );
}
