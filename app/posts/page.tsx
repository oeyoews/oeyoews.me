import { FcFolder } from 'react-icons/fc';

import type { Route } from 'next';
import Link from 'next/link';

import CommitInfo from '@/app/ui/CommitInfo';
import EmptyPost from '@/app/ui/PostList/EmptyPost';
import Badge from '@/app/ui/PostList/PostBadges';
import YearHeader from '@/app/ui/PostList/YearHeader';
import { type Post, allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';

function PostItem({ post, index }: { post: Post; index: number }) {
  return (
    <li className="ml-6 group my-8">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 bg-white">
        <FcFolder className="h-4 w-4 text-gray-400 duration-300 transition-all group-hover:stroke-indigo-500" />
      </span>
      <Link
        href={post.slug as Route}
        className="text-xs rounded-md"
        title="点击阅读全文"
      >
        <h2 className="text-neutral-700 hover:text-neutral-950 duration-300 transition my-2">
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
    </li>
  );
}

function PostList({ posts }: { posts: Post[] }) {
  let currentYear: number;

  return (
    <ol className="prose relative list-none border-gray-100/80 border-l-4">
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
            <article key={post._id}>
              {yearHeader}
              <PostItem post={post} index={index} />
            </article>
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
