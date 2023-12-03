import Link from 'next/link';

import { format } from 'date-fns';
import Badge from '~components/Badge';
import Icon from '~components/Icon';
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
      </Timeline.Li>
    </>
  );
}
