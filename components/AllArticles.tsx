import { use } from 'react';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { getAllArticles } from '@/utils/getArticles';

export default function AllArticles() {
  const articles = use(getAllArticles());

  articles.sort((a: any, b: any) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);
    return dateB.getTime() - dateA.getTime();
  });

  const t = useTranslations('Index');

  return (
    <div className="mx-auto max-w-xl text-sm">
      <h1 className="mb-4 text-2xl font-bold">{t('blog')}</h1>
      {articles.map((article) => {
        const { metadata } = article;
        const title = String(metadata?.title || article.slug);

        return (
          <Link
            key={title}
            href={'/articles/' + article.slug}
            className="flex flex-col overflow-hidden rounded-md p-2 !text-sm duration-300 lg:hover:bg-neutral-100"
          >
            <div className="px-4 py-2">
              <div className="my-1 text-gray-500">{metadata?.date}</div>
              <div className="mb-2 text-base font-semibold">{title}</div>
              <p className="line-clamp-3 text-sm text-gray-600">
                {metadata?.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
