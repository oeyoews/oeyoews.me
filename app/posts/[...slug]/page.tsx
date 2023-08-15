import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Fancybox from '@/components/Fancybox';
import Unsplash from '@/components/Unsplash';
import { Mdx } from '@/components/mdx-components';

import { allPosts } from 'contentlayer/generated';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
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
    <article className="py-6 prose  prose-img:rounded-md">
      <h1 className="mb-2">{post.title}</h1>
      <hr className="my-4" />
      <Fancybox>
        <Unsplash slug={post.title} />
      </Fancybox>
      <Mdx code={post.body.code} />
    </article>
  );
}
