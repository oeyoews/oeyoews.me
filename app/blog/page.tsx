import Link from 'next/link';

import { format } from 'date-fns';
import { Post } from '~app/blog/blog';
import { getBlogPosts } from '~app/blog/blog';
import CommitInfo from '~components/CommitInfo';
import EmptyPost from '~components/PostList/EmptyPost';
import Badge from '~components/PostList/PostBadges';
import YearHeader from '~components/PostList/YearHeader';
import Dot from '~components/Timeline/Dot';

const PostItem = ({
  post,
  index,
  children,
}: {
  post: Post;
  index: number;
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
      <li className="group pl-6 border-gray-100/80 border-l-2 pb-6 relative m-0">
        <Dot />
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
      </li>
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
    <ul className="list-none prose dark:prose-invert ">
      {posts.sort(sortByDateDesc).map((post, index) => {
        const postYear = new Date(post.metadata.date).getFullYear();
        const yearHeader =
          currentYear !== postYear ? <YearHeader postYear={postYear} /> : null;
        currentYear = postYear;
        return (
          <PostItem post={post} index={index} key={post.metadata.title}>
            {yearHeader}
          </PostItem>
        );
      })}
      <CommitInfo />
    </ul>
  );
};

export default HomePage;
