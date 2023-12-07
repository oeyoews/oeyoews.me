'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import TiddlerItem from '~components/TiddlyWiki/TiddlerItem';
import Timeline from '~components/Timeline';
import YearHeader from '~components/YearHeader';
import config from '~site/config';

export default function TiddlersList({
  tiddlers,
  route,
}: {
  tiddlers: TiddlerMetadata[];
  route: string;
}) {
  let currentYear: number;
  const { replace } = useRouter();
  const pathname = usePathname();
  const listparams = useSearchParams();
  const list = Number(listparams.get('list')) || config.steps;

  function handleLoadItems() {
    const params = new URLSearchParams(listparams);
    params.set('list', (list + config.steps).toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <Timeline>
        {tiddlers.slice(0, list).map((tiddler, index) => {
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
      {tiddlers.length > list && (
        <button
          onClick={handleLoadItems}
          className="text-sm font-medium rounded px-2 font-mono py-1"
        >
          加载更多
        </button>
      )}
    </>
  );
}
