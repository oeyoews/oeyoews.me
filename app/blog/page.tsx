import Link from 'next/link';

import { format } from 'date-fns';
import { Post } from '~app/blog/blog';
import { getBlogPosts } from '~app/blog/blog';
import CommitInfo from '~components/CommitInfo';
import Icon from '~components/Icon';
import EmptyPost from '~components/PostList/EmptyPost';
import Badge from '~components/PostList/PostBadges';
import YearHeader from '~components/PostList/YearHeader';

const PostItem = ({ post, index }: any) => {
  const { metadata } = post;

  const badges = [];
  if (index === 0)
    badges.push(<Badge key={index} className="bg-neutral-100" text="Latest" />);
  if (metadata.password)
    badges.push(
      <Badge key={index} className="bg-purple-200" text="Password" />,
    );
  if (metadata.draft === true)
    badges.push(<Badge key={index} className="bg-gray-100" text="Draft" />);

  return (
    <div className="group pl-6 border-gray-100/80 border-l-2 pb-4 relative m-0">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[13px]">
        <Icon
          icon="clarity:dot-circle-line"
          className="stroke-2 h-4 w-4 text-gray-300/80 duration-300 transition-all group-hover:text-[#8bc34a] group-hover:scale-105"
        />
      </span>
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
    </div>
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
    <ol className="list-none prose dark:prose-invert ">
      {posts.sort(sortByDateDesc).map((post, index) => {
        const postYear = new Date(post.metadata.date).getFullYear();
        const yearHeader =
          currentYear !== postYear ? <YearHeader postYear={postYear} /> : null;
        currentYear = postYear;
        return (
          <li key={post.metadata.title}>
            {yearHeader}
            <PostItem post={post} index={index} />
          </li>
        );
      })}
      <CommitInfo />
    </ol>
  );
};

export default HomePage;
