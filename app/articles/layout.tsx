import { FiArrowLeft } from 'react-icons/fi';

import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { getArticleBySlug } from '@/utils/getArticles';

import ArticleInfo from '@/components/ArticleInfo';

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
      {children}
      <Link
        className="mb-0 mt-4 flex justify-end rounded-md no-underline"
        href="/"
      >
        <button className="inline transform justify-center rounded-sm bg-neutral-100 px-2 py-1 font-normal transition duration-300 hover:scale-105">
          <FiArrowLeft className="inline" />
          back home
        </button>
      </Link>
    </article>
  );
}
