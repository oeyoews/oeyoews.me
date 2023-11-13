import { Icon } from '@iconify/react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { format } from 'date-fns';
import Badge from '~app/ui/PostList/PostBadges';

export default function GithubIssueItem({
  issue,
  index,
}: {
  issue: Issue;
  index: number;
}) {
  const { title, created_at, number } = issue;
  const pathname = usePathname();
  return (
    <div className="pl-6 border-gray-100/80 border-l-2 pb-8 relative my-0">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[13px]">
        <Icon
          icon="clarity:dot-circle-line"
          className="h-4 w-4 text-gray-300/80 transition-all group-hover:scale-0 group-hover:hidden"
        />
        <Icon
          icon="carbon:circle-filled"
          className="h-4 w-4 text-gray-300/80 transition-all group-hover:text-lime-500 hidden group-hover:block delay-100 scale-0 group-hover:scale-105 duration-800"
        />
      </span>
      <Link
        href={`${pathname}/${number}`}
        className="text-xs rounded-md"
        title="点击阅读全文"
      >
        <h2 className="text-neutral-700 hover:text-neutral-950 duration-300 transition mt-0 mb-2 truncate text-blance capitalize">
          {title}
          {index === 0 && (
            <Badge className="bg-neutral-200 font-bold" text="Latest" />
          )}
        </h2>
      </Link>
      <time className="block text-sm font-normal leading-none text-gray-400">
        {format(new Date(created_at), 'EEE, MMMM d')}
      </time>
    </div>
  );
}
