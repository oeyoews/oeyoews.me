'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import TiddlerItem from '~components/TiddlyWiki/TiddlerItem';
import Timeline from '~components/Timeline';
import YearHeader from '~components/YearHeader';
import useBlogStore from '~lib/store';

export default function TiddlersList({
  tiddlers,
  route,
}: {
  tiddlers: TiddlerMetadata[];
  route: string;
}) {
  const loadedItems = useBlogStore.use.loadedItems();
  const setLoadedItems = useBlogStore.use.setLoadedItems();
  const [data, setData] = useState<TiddlerMetadata[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (tiddlers && tiddlers.length > 0) {
      setData(tiddlers);
      setHasLoaded(true);
    }
  }, [tiddlers]);

  const handleLoadMore = () => {
    if (data.length < loadedItems) {
      toast.error('没有更多了');
      return;
    }
    setLoadedItems(loadedItems + 30);
    toast.success('加载成功');
  };

  useEffect(() => {
    if (!searchTerm) {
      setData(tiddlers);
      return;
    }
    const filteredData = tiddlers.filter((tiddler) =>
      tiddler.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setData(filteredData);
  }, [searchTerm, tiddlers]);

  let currentYear: number;

  const TiddlerListContent = () => (
    <Timeline>
      {data.slice(0, loadedItems).map((tiddler, index) => {
        const { title, date } = tiddler;
        const postYear = new Date(date).getFullYear();
        const yearHeader = currentYear !== postYear && (
          <YearHeader postYear={postYear} />
        );
        currentYear = postYear;

        return (
          <TiddlerItem
            tiddler={tiddler}
            index={index}
            key={title}
            order={index === data.length - 1 ? 'end' : 'normal'}
            route={route}
          >
            {yearHeader}
          </TiddlerItem>
        );
      })}
    </Timeline>
  );

  return (
    <div>
      <TiddlerListContent />
      {data.length > loadedItems && (
        <button
          onClick={handleLoadMore}
          className="text-sm font-medium rounded px-2 font-mono py-1"
        >
          加载更多
        </button>
      )}
    </div>
  );
}
