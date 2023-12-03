import Link from 'next/link';

import { format } from 'date-fns';
import { Post } from '~app/blog/blog';
import { getBlogPosts } from '~app/blog/blog';
import CommitInfo from '~components/CommitInfo';
import EmptyPost from '~components/PostList/EmptyPost';
import Badge from '~components/PostList/PostBadges';
import YearHeader from '~components/PostList/YearHeader';
import Timeline from '~components/Timeline';

const PostItem = ({
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
          <h2 className="mt-0 mb-2 capitalize">
            {metadata.title}
            {badges}
          </h2>
        </Link>
        <time className="block text-sm font-normal leading-none text-gray-400">
          {metadata.date && format(new Date(metadata.date), 'EEE, MMMM d')}
        </time>
      </Timeline.Li>
    </>
  );
};

const sortByDateDesc = (a: Post, b: Post) =>
  new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1;

const HomePage = () => {
  const posts = getBlogPosts();
  let currentYear: any = null;

  if (!posts.length) {
    return <EmptyPost />;
  }

  return (
    <Timeline>
      {posts.sort(sortByDateDesc).map((post, index) => {
        const postYear = new Date(post.metadata.date).getFullYear();
        const yearHeader =
          currentYear !== postYear ? <YearHeader postYear={postYear} /> : null;
        currentYear = postYear;
        return (
          <PostItem
            post={post}
            index={index}
            key={post.metadata.title}
            order={index === posts.length - 1 ? 'end' : 'normal'}
          >
            {yearHeader}
          </PostItem>
        );
      })}
      <CommitInfo />
    </Timeline>
  );
};

export default HomePage;
