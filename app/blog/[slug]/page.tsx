import { Suspense } from 'react';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import MDX from '~app/blog/Mdx';
import { getBlogPosts } from '~app/blog/db/blog';
import PasswordProtectedContent from '~ui/PasswordPost';
import Spinner from '~ui/Spinner';

const getPostFromParams = (slug: string) =>
  getBlogPosts().find((post) => post.slug === slug);

export const generateMetadata = ({ params }: { params: Params }): Metadata => {
  const post = getPostFromParams(params.slug);
  return {
    title: post?.slug,
  };
};

export const generateStaticParams = () => {
  const posts = getBlogPosts();
  // @ts-ignore
  return posts.map((posts) => ({ slug: posts.slug }));
};

const PostPage = ({ params }: { params: Params }) => {
  const post = getPostFromParams(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose max-w-none prose-img:rounded-md">
      {/* @ts-ignore */}
      <h1 className="mb-2 text-3xl">{post.slug}</h1>
      <hr className="my-4 border-2 border-gray-100 rounded-full" />
      <PasswordProtectedContent post={post}>
        <Suspense fallback={<Spinner center={true} size={88} />}>
          <article>
            {/* @ts-ignore */}
            <MDX source={post?.content} />
          </article>
        </Suspense>
      </PasswordProtectedContent>
    </article>
  );
};

export default PostPage;
