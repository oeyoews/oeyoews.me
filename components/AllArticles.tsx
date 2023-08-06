import Link from 'next/link';

import { getAllArticles } from '@/utils/getArticles';

import ModeToggle from './ToggleTheme';

export default async function AllArticles() {
  const articles = await getAllArticles();

  articles.sort((a: any, b: any) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="mx-auto max-w-xl text-sm">
      <h1 className="mb-4 text-2xl font-bold">
        博客 <ModeToggle />
      </h1>
      {articles.map((article) => {
        const { metadata } = article;
        const title = String(metadata?.title || article.slug);

        return (
          <Link
            key={title}
            href={'/articles/' + article.slug}
            className="flex flex-col overflow-hidden rounded-md p-2 !text-sm duration-300"
          >
            <div className="px-4 py-2">
              <div className="my-1 text-gray-500">{metadata?.date}</div>
              <div className="mb-2 text-base font-semibold">{title}</div>
              <p className="line-clamp-3 text-sm text-gray-600 indent-0">
                {metadata?.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
