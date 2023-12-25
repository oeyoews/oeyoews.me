import { GoComment } from 'react-icons/go';

import Link from 'next/link';

import { format } from 'date-fns';
import { H2 } from '~components/ArticleComponents';
import Badge from '~components/Badge';
import Timeline from '~components/Timeline';

export default function GithubIssueItem({
  issue,
  index,
  order,
  children,
}: {
  issue: Issue;
  index: number;
  order?: Order;
  children: React.ReactNode;
}) {
  const { title, date, slug, html_url, number } = issue;
  return (
    <>
      {children}
      <Timeline.Li order={order}>
        <Timeline.Dot />
        <Link
          href={`/issue/${slug}`}
          className="text-xs rounded-md"
          title="点击阅读全文"
          // scroll={false}
        >
          <H2>
            {title}
            {index === 0 && <Badge className="font-bold" text="Latest" />}
          </H2>
        </Link>
        <div className="flex space-x-2 text-gray-400 items-center">
          <Link href={html_url} className="text-gray-400" target="_blank">
            #{number}
          </Link>
          <Timeline.Time>{format(new Date(date), 'EEE, MMMM d')}</Timeline.Time>
          <div className="space-x-1">
            <GoComment className="size-4 text-gray-400" />
            <span>{issue.comments}</span>
          </div>
        </div>
      </Timeline.Li>
    </>
  );
}
