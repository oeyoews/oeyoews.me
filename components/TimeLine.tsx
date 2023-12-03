'use client';

import { Link, Timeline } from 'react-daisyui';

import { usePathname } from 'next/navigation';

import format from 'date-fns/format';
import { Post } from '~app/blog/blog';

const sortByDate = (a: Post, b: Post) =>
  new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1;

export default function TimeLine({ post }: { post: Post[] }) {
  const pathname = usePathname();
  const PostLine = post.sort(sortByDate).map((item, index) => {
    const connect =
      index === 0 ? 'end' : index === post.length - 1 ? 'start' : 'both';

    return (
      <Timeline.Item connect={connect} key={item.slug}>
        <Timeline.Start>
          {item.metadata.date &&
            format(new Date(item.metadata.date), 'EEE, MMMM d yyyy')}
        </Timeline.Start>
        <Timeline.Middle />
        <Timeline.End className="rounded-md">
          <Link href={`${pathname}/${item.slug}`}>{item.metadata.title}</Link>
        </Timeline.End>
      </Timeline.Item>
    );
  });

  return <Timeline vertical>{PostLine}</Timeline>;
}
