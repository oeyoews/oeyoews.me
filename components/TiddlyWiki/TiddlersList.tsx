'use client';

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

  const handleLoadMore = () => {
    if (tiddlers.length < loadedItems) {
      toast.error('没有更多了');
      return;
    }
    setLoadedItems(loadedItems + 30);
  };

  let currentYear: number;

  return (
    <>
      <Timeline>
        {tiddlers.slice(0, loadedItems).map((tiddler, index) => {
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
              order={index === tiddlers.length - 1 ? 'end' : 'normal'}
              route={route}
            >
              {yearHeader}
            </TiddlerItem>
          );
        })}
      </Timeline>
      {tiddlers.length > loadedItems && (
        <button
          onClick={handleLoadMore}
          className="text-sm font-medium rounded px-2 font-mono py-1"
        >
          加载更多
        </button>
      )}
    </>
  );
}
