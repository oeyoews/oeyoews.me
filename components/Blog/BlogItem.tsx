import Link from 'next/link';

import { IRoute } from '~config';
import { format } from 'date-fns';
import { H2 } from '~components/ArticleComponents';
import Badge from '~components/Badge';
import Timeline from '~components/Timeline';
import { Post } from '~lib/blog';

const BlogItem = ({
  route,
  post,
  index,
  order,
  children
}: {
  route: IRoute;
  post: Post;
  index: number;
  order: Order;
  children: any;
}) => {
  const { metadata } = post;

  const badgesInfo = {
    Latest: index === 0,
    Password: metadata.password,
    Draft: metadata.draft === true
  };

  const badges = Object.entries(badgesInfo).map(([text, show]) => {
    return show && <Badge key={text} text={text} />;
  });

  return (
    <>
      {children}
      <Timeline.Li order={order}>
        <Timeline.Dot />
        <Link
          href={`${route}/${post.slug}`}
          className="text-xs rounded-md"
          title="点击阅读全文"
          // scroll={false}
        >
          <H2>
            {metadata.title}
            {badges}
          </H2>
        </Link>
        <Timeline.Info>
          <Timeline.Time>
            {metadata.date && format(new Date(metadata.date), 'EEE, MMMM d')}
          </Timeline.Time>
        </Timeline.Info>
      </Timeline.Li>
    </>
  );
};

export default BlogItem;
