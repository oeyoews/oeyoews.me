import Link from 'next/link';

import { format } from 'date-fns';
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
          <h2 className="mt-0 mb-2 truncate text-blance capitalize">
            {formatTitle(title)}
            {index === 0 && <Badge className="" text="Latest" />}
          </h2>
        </Link>
        <time className="block text-sm font-normal leading-none text-gray-400">
          {format(date, 'EEE, MMMM d')}
        </time>
      </Timeline.Li>
    </>
  );
}
