import { Suspense } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Article, Divider, H1 } from '~components/ArticleComponents';
import MarkdownItRenderer from '~components/MarkdownIt';
import MDX from '~components/Mdx';
import PasswordProtectedContent from '~components/PasswordPost';
import Spinner from '~components/Spinner';
import { getBlogPosts, getPostFromParams } from '~lib/blog';

export const generateMetadata = ({ params }: { params: Params }): Metadata => {
  const post = getPostFromParams(params.slug);
  return {
    title: post?.metadata.title,
  };
};

export const generateStaticParams = () => {
  const posts = getBlogPosts();
  return posts.map((posts) => ({ slug: posts.slug }));
};

const PostPage = ({ params }: { params: Params }) => {
  const post = getPostFromParams(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Article>
      <H1>{post.metadata.title}</H1>
      <Divider />
      <PasswordProtectedContent post={post}>
        <Suspense fallback={<Spinner center />}>
          {post.type === 'md' ? (
            <MarkdownItRenderer content={post.content} />
          ) : (
            <MDX source={post.content} />
          )}
        </Suspense>
      </PasswordProtectedContent>
    </Article>
  );
};

export default PostPage;
