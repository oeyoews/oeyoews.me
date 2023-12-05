import Link from 'next/link';

import { format } from 'date-fns';
import { H2 } from '~components/ArticleComponents';
import Badge from '~components/Badge';
import Timeline from '~components/Timeline';
import formatTitle from '~lib/formatTitle';

export default function TiddlerItem({
  tiddler,
  index,
  order,
  children,
  route,
}: {
  tiddler: TiddlerMetadata;
  index: number;
  order: Order;
  children: any;
  route: string;
}) {
  const { title, slug, date } = tiddler;
  return (
    <>
      {children}
      <Timeline.Li order={order}>
        <Timeline.Dot />
        <Link
          href={`/${route}/${slug}`}
          className="text-xs rounded-md"
          title="点击阅读全文"
        >
          <H2>
            {formatTitle(title)}
            {index === 0 && <Badge className="" text="Latest" />}
          </H2>
        </Link>
        <Timeline.Time>{format(date, 'EEE, MMMM d')}</Timeline.Time>
      </Timeline.Li>
    </>
  );
}
