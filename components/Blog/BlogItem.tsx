import Link from 'next/link';

import { format } from 'date-fns';
import { H2 } from '~components/ArticleComponents';
import Badge from '~components/Badge';
import Timeline from '~components/Timeline';
import { Post } from '~lib/blog';

const BlogItem = ({
  post,
  index,
  order,
  children,
}: {
  post: Post;
  index: number;
  order: Order;
  children: any;
}) => {
  const { metadata } = post;

  const badges = [];

  if (index === 0)
    badges.push(<Badge key={index} className="" text="Latest" />);
  if (metadata.password)
    badges.push(<Badge key={index} className="" text="Password" />);
  if (metadata.draft === true)
    badges.push(<Badge key={index} className="" text="Draft" />);

  return (
    <>
      {children}
      <Timeline.Li order={order}>
        <Timeline.Dot />
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs rounded-md"
          title="点击阅读全文"
        >
          <H2>
            {metadata.title}
            {badges}
          </H2>
        </Link>
        <Timeline.Time>
          {metadata.date && format(new Date(metadata.date), 'EEE, MMMM d')}
        </Timeline.Time>
      </Timeline.Li>
    </>
  );
};

export default BlogItem;
