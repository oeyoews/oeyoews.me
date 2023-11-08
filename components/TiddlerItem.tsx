import { FcFolder } from 'react-icons/fc';

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
    <li className="ml-6 group my-8">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 bg-white">
        <FcFolder className="h-4 w-4 text-gray-400 duration-300 transition-all group-hover:stroke-indigo-500" />
      </span>
      <Link
        href={`${pathname}/${slug}`}
        className="text-xs rounded-md"
        title="点击阅读全文"
      >
        <h2 className="text-neutral-700 hover:text-neutral-950 duration-300 transition my-2 text-blance">
          {title}
          {index === 0 && (
            <Badge className="bg-green-300 font-bold" text="Latest" />
          )}
        </h2>
      </Link>
      <time className="block text-sm font-normal leading-none text-gray-400">
        {format(date, 'EEE, MMMM d')}
      </time>
    </li>
  );
}
