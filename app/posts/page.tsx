import type { Route } from 'next';
import Link from 'next/link';

import { type Post, allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import Icon from '~ui/Icon';
import EmptyPost from '~ui/PostList/EmptyPost';
import Badge from '~ui/PostList/PostBadges';
import YearHeader from '~ui/PostList/YearHeader';
import CommitInfo from '~ui/git/CommitInfo';

function PostItem({ post, index }: { post: Post; index: number }) {
  return (
    <div className="group pl-6 border-gray-100/80 border-l-2 pb-4 relative m-0">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[13px]">
        <Icon
          icon="clarity:dot-circle-line"
          className="stroke-2 h-4 w-4 text-gray-300/80 duration-300 transition-all group-hover:text-[#8bc34a] group-hover:scale-105"
        />
      </span>
      <Link
        href={post.slug as Route}
        className="text-xs rounded-md"
        title="点击阅读全文"
      >
        <h2 className="text-neutral-700 hover:text-neutral-950 duration-300 transition mt-0 mb-2">
          {post.title}
          {index === 0 && (
            <Badge className="bg-neutral-100 font-bold" text="Latest" />
          )}
          {post.password && <Badge className="bg-purple-200" text="Password" />}
          {post.draft === true && (
            <Badge className="bg-gray-100" text="Draft" />
          )}
        </h2>
      </Link>
      <time className="block text-sm font-normal leading-none text-gray-400">
        {format(new Date(post.date), 'EEE, MMMM d')}
      </time>
    </div>
  );
}

function PostList({ posts }: { posts: Post[] }) {
  let currentYear: number;

  return (
    <ol className="prose list-none ">
      {posts
        .sort((a, b) => {
          return a.date > b.date ? -1 : 1;
        })
        .map((post, index) => {
          const postYear = new Date(post.date).getFullYear();

          const yearHeader =
            currentYear !== postYear ? (
              <YearHeader postYear={postYear} />
            ) : null;

          currentYear = postYear;

          return (
            <li key={post._id}>
              {yearHeader}
              <PostItem post={post} index={index} />
            </li>
          );
        })}
      <CommitInfo />
    </ol>
  );
}

export default function HomePage() {
  if (!allPosts.length) {
    return <EmptyPost />;
  }

  return <PostList posts={allPosts} />;
}
