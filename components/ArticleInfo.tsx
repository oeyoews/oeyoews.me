import { FcCalendar, FcClock } from 'react-icons/fc';
import { RiEye2Line } from 'react-icons/ri';

import { Article } from '@/types/article';

import views from '@/lib/getViews';
import { isDev } from '@/lib/isDev';

export default async function ArticleInfo({
  article: { metadata, readingTime, slug },
}: {
  article: Article;
  className?: string;
}) {
  const counter = await views(slug);
  const author = Array.isArray(metadata?.authors)
    ? metadata?.authors.join(', ')
    : metadata?.authors || 'oeyoews';

  const total = isDev ? null : (
    <div>
      <RiEye2Line className="inline fill-purple-400 stroke-0" /> {counter} views
    </div>
  );

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
      {total}
    </div>
  );
}
