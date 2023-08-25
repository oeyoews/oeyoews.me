import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import Link from 'next/link';
import CommitInfo from '@/components/CommitInfo';
import { type Post, allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import YearHeader from '@/components/PostList/YearHeader';
import { PasswordBadge, DraftBadge } from '@/components/PostList/PostBadges';
import EmptyPost from '@/components/PostList/EmptyPost';

function PostItem({ post }: { post: Post }) {
  return (
    <li className="ml-6 group my-8">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 bg-white">
        <FcFolder className="group-hover:hidden h-4 w-4 text-gray-400 duration-300 transition-all group-hover:stroke-indigo-500" />
        <FcOpenedFolder className="hidden group-hover:block h-4 w-4 text-gray-400 duration-300 transition-all group-hover:stroke-indigo-500" />
      </span>
      <Link href={post.slug} className="text-xs rounded-md" title="点击阅读全文">
        <h2 className="text-neutral-700 hover:text-neutral-950 duration-300 transition my-2">
          {post.title}
          {post.password && <PasswordBadge />}
          {post.draft === true && <DraftBadge />}
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
    <ol className="prose relative list-none border-gray-100/80 border-l-4" key={'all-posts'}>
      {posts
        .sort((a, b) => {
          return a.date > b.date ? -1 : 1;
        })
        .map((post) => {
          const postYear = new Date(post.date).getFullYear();

          const yearHeader =
            currentYear !== postYear ? <YearHeader postYear={postYear} /> : null;

          currentYear = postYear;

          return (
            <article key={post._id}>
              {yearHeader}
              <PostItem post={post} />
            </article>
          );
        })}
      <CommitInfo />
    </ol>
  );
}

export default function HomePage() {
  allPosts.length === 0 && <EmptyPost />;

  return <PostList posts={allPosts} />;
}