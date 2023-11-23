import Link from 'next/link';

import { format } from 'date-fns';
import { getBlogPosts } from '~app/blog/blog';
import CommitInfo from '~ui/CommitInfo';
import Icon from '~ui/Icon';
import EmptyPost from '~ui/PostList/EmptyPost';
import Badge from '~ui/PostList/PostBadges';
import YearHeader from '~ui/PostList/YearHeader';

const PostItem = ({ post, index }: any) => {
  const { metadata } = post;

  const badges = [];
  if (index === 0)
    badges.push(<Badge key={index} className="ml-1" text="Latest" />);
  if (metadata.password)
    badges.push(
      <Badge key={index} className="ml-1 badge-error" text="Password" />,
    );
  if (metadata.draft === true)
    badges.push(<Badge key={index} className="ml-1 badge-info" text="Draft" />);

  return (
    <div className="group pl-6 border-l-4 border-neutral-950 pb-4 relative m-0">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[13px]">
        <Icon
          icon="clarity:dot-circle-line"
          className="stroke-2 h-4 w-4 tex-gray-300/80 duration-300 transition-all group-hover:text-[#8bc34a] group-hover:scale-105"
        />
      </span>
      <Link
        href={`/blog/${post.slug}`}
        className="text-xs rounded-md"
        title="点击阅读全文"
      >
        <h2 className="duration-300 transition mt-0 mb-2">
          {metadata.title}
          {badges}
        </h2>
      </Link>
      <time className="block text-sm font-normal leading-none">
        {format(new Date(metadata.date), 'EEE, MMMM d')}
      </time>
    </div>
  );
};

// @ts-ignore
const sortByDateDesc = (a, b) => (a.metadata.date > b.metadata.date ? -1 : 1);

const HomePage = () => {
  const posts = getBlogPosts();
  let currentYear: any = null;

  if (!posts.length) {
    return <EmptyPost />;
  }

  return (
    <ol className="prose">
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
