import { Suspense } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { getArticleBySlug } from '@/utils/getArticles';

import ArticleInfo from '@/components/ArticleInfo';
import { Button } from '@/components/ui/button';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slug = headers().get('x-next-article-slug') as string;
  const article = await getArticleBySlug(slug);
  const { metadata } = article;
  const image = metadata?.image;

  return (
    <article className="lg:prose-md prose mx-auto p-4">
      {
        <div className="flex max-h-[60vh] justify-center">
          <Image
            className="rounded-md"
            src={image || '/image.png'}
            width={1080}
            height={960}
            alt={String(metadata?.title)}
          />
        </div>
      }
      <h1>{String(metadata?.title)}</h1>
      <ArticleInfo article={article} className="inline px-1 text-sm" />
      <Suspense
        fallback={<div className="flex justify-center my-2">Loading...</div>}
      >
        {children}
      </Suspense>
      <div className="flex justify-end">
        <Button variant="secondary" asChild>
          <Link href="/">
            <FiArrowLeft className="inline" /> Back Home
          </Link>
        </Button>
      </div>
    </article>
  );
}
