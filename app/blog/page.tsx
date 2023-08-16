import Link from 'next/link';

import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';

export default function HomePage() {
  if (allPosts.length === 0) {
    return (
      <div className="prose">
        <h1 className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          当前文章数目为零
        </h1>
      </div>
    );
  }

  return (
    <div className="prose">
      {allPosts
        .sort((a, b) => {
          return a.date > b.date ? -1 : 1;
        })
        .map((post) => (
          <article key={post._id}>
            <Link href={post.slug} className="text-xs bg-red-200">
              <h2 className="">{post.title}</h2>
              <p className="text-gray-400">
                {format(new Date(post.date), 'yyyy-MM-dd')}
              </p>
            </Link>
          </article>
        ))}
      <small className="my-1 text-slate-300">当前所有文章暂未经过整理 </small>
    </div>
  );
}
