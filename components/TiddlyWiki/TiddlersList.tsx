'use client';

import useList from '~lib/hooks/useList';
import { IRoute } from '~config';

import LoadMore from '~components/LoadMore';
import TiddlerItem from '~components/TiddlyWiki/TiddlerItem';
import Timeline from '~components/Timeline';
import YearHeader from '~components/YearHeader';

export default function TiddlersList({
  tiddlers,
  route
}: {
  tiddlers: TiddlerMetadata[];
  route: IRoute;
}) {
  let currentYear: number;

  const { list, handleLoadItems } = useList();

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
      <LoadMore data={tiddlers} />
    </>
  );
}
