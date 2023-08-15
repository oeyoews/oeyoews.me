import Link from 'next/link';

import { allPosts } from 'contentlayer/generated';

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
  const sortedPosts = allPosts.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });

  return (
    <div className="prose">
      {sortedPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug} className="text-sm">
            <h2>{post.title}</h2>
          </Link>
          {/* {post.description && <p>{post.description}</p>} */}
        </article>
      ))}
    </div>
  );
}
