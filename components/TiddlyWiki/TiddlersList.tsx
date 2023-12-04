'use client';

import { useLoadItems } from '~lib/hooks/useLoadItems';

import TiddlerItem from '~components/TiddlyWiki/TiddlerItem';
import Timeline from '~components/Timeline';
import YearHeader from '~components/YearHeader';

export default function TiddlersList({
  tiddlers,
  route,
}: {
  tiddlers: TiddlerMetadata[];
  route: string;
}) {
  const { loadedItems, handleLoadMore } = useLoadItems(10);

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
          onClick={() => handleLoadMore(tiddlers.length)}
          className="text-sm font-medium rounded px-2 font-mono py-1"
        >
          加载更多
        </button>
      )}
    </>
  );
}
