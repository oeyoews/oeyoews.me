import { Icon } from '@iconify/react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Badge from './PostList/PostBadges';

import { format } from 'date-fns';

export default function TiddlerItem({
  tiddler,
  index,
}: {
  tiddler: TiddlerMetadata;
  index: number;
}) {
  const { title, slug, date } = tiddler;
  const pathname = usePathname();
  return (
    <div className="ml-6 group my-8 group">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 bg-white">
        <Icon
          icon="clarity:dot-circle-line"
          className="stroke-2 h-4 w-4 text-gray-300/80 duration-300 transition-all group-hover:text-[#8bc34a] group-hover:scale-105"
        />
      </span>
      <Link
        href={`${pathname}/${slug}`}
        className="text-xs rounded-md"
        title="点击阅读全文"
      >
        <h2 className="text-neutral-700 hover:text-neutral-950 duration-300 transition my-2 truncate text-blance capitalize">
          {title}
          {index === 0 && (
            <Badge className="bg-neutral-200 font-bold" text="Latest" />
          )}
        </h2>
      </Link>
      <time className="block text-sm font-normal leading-none text-gray-400">
        {format(date, 'EEE, MMMM d')}
      </time>
    </div>
  );
}
