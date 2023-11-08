'use client';

import { useEffect, useState } from 'react';

import YearHeader from '@/components/PostList/YearHeader';
import TiddlerItem from '@/components/TiddlerItem';

import useStore from '@/lib/store';
import { toast } from 'sonner';

export default function TiddlersList({
  tiddlers,
  children,
}: {
  tiddlers: Tiddler[];
  children?: React.ReactNode;
}) {
  const tiddlerstore = useStore();
  const [data, setData] = useState<Tiddler[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [initialData, setIntialData] = useState<Tiddler[]>(tiddlers);
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
  useEffect(() => {
    if (tiddlers) setHasloaded(true);
  }, [tiddlers]);

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

  const TiddlersListItem = (
    <div>
      <input
        className="w-full focus:ring-2 focus:ring-indigo-500 outline-indigo-400 focus:ring-opacity-50 rounded px-2 font-mono py-1"
        autoFocus={true}
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Tiddlers (online)"
      />
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
  );

  return (
    <>
      {children}
      {hasloaded && TiddlersListItem}
    </>
  );
}
