import { Icon } from '@iconify/react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { format } from 'date-fns';
import Badge from '~components/PostList/PostBadges';

export default function GithubIssueItem({
  issue,
  index,
}: {
  issue: Issue;
  index: number;
}) {
  const { title, date, slug, html_url, number } = issue;
  const pathname = usePathname();
  return (
    <div className="pl-6 border-gray-100/80 border-l-2 pb-4 relative my-0">
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
        href={`${pathname}/${slug}`}
        className="text-xs rounded-md"
        title="点击阅读全文"
      >
        <h2 className="mt-0 mb-2 truncate text-blance capitalize">
          {title}
          {index === 0 && <Badge className="font-bold" text="Latest" />}
        </h2>
      </Link>
      <div className="flex space-x-2 text-gray-400">
        <Link href={html_url} className="text-gray-400 mb-2" target="_blank">
          #{number}
        </Link>
        <time className="">{format(new Date(date), 'EEE, MMMM d')}</time>
        <div className="space-x-1">
          <Icon icon="octicon:comment-24" className="h-4 w-4 text-gray-400" />
          <span>{issue.comments}</span>
        </div>
      </div>
    </div>
  );
}
