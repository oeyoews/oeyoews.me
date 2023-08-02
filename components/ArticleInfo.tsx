import { FcCalendar, FcClock } from 'react-icons/fc';

import { Article } from '@/types/article';

import ViewCounter from './ViewCounter';

export default async function ArticleInfo({
  article: { metadata, readingTime, slug },
}: {
  article: Article;
  className?: string;
}) {
  const author = Array.isArray(metadata?.authors)
    ? metadata?.authors.join(', ')
    : metadata?.authors || 'oeyoews';

  return (
    <div
      className={
        'my-2 flex w-full justify-center space-x-2 text-sm text-gray-500'
      }
    >
      <div>
        {metadata?.date && <FcCalendar className="inline" />}
        {metadata?.date}
      </div>
      <div>
        <FcClock className="inline" /> {readingTime}
      </div>
      <ViewCounter slug={slug} />
    </div>
  );
}
