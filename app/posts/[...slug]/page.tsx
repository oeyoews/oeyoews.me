import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { allPosts } from 'contentlayer/generated';
import { Mdx } from '~ui/Mdx';
import PasswordProtectedContent from '~ui/PasswordPost';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  return allPosts.find((post) => post.slugAsParams === slug);
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  return {
    title: post?.title || 'Not Found',
    description: post?.description,
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose prose-img:rounded-md">
      <h1 className="mb-2 text-3xl">{post.title}</h1>
      <hr className="my-4 border-2 border-gray-100 rounded-full" />
      <PasswordProtectedContent post={post}>
        <Mdx code={post.body.code} />
      </PasswordProtectedContent>
    </article>
  );
}
