import { FaRegDotCircle } from 'react-icons/fa';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { format } from 'date-fns';
import Badge from '~components/PostList/PostBadges';
import formatTitle from '~lib/formatTitle';

export default async function TiddlerItem({
  tiddler,
  index,
}: {
  tiddler: TiddlerMetadata;
  index: number;
}) {
  const { title, slug, date } = tiddler;
  const pathname = usePathname();
  return (
    <div className="pl-6 border-gray-100/80 border-l-2 pb-4 relative">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[13px]">
        <FaRegDotCircle className="h-4 w-4 text-gray-300/80 duration-300 transition-all group-hover:text-[#8bc34a] group-hover:scale-105" />
      </span>
      <Link
        href={`${pathname}/${slug}`}
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
    </div>
  );
}
