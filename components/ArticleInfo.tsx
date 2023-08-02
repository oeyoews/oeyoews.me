import { FcCalendar, FcClock } from 'react-icons/fc';
import { RiEye2Line } from 'react-icons/ri';

import { Article } from '@/types/article';

import views from '@/lib/getViews';
import { isDev } from '@/lib/isDev';

export default async function ArticleInfo({
  article: { metadata, readingTime, slug },
  className,
}: {
  article: Article;
  className?: string;
}) {
  const counter = await views(slug);
  const author = Array.isArray(metadata?.authors)
    ? metadata?.authors.join(', ')
    : metadata?.authors || 'oeyoews';

  return (
    <div
      className={
        'my-2 flex w-full justify-end space-x-2 text-sm text-gray-500' +
        ' ' +
        className
      }
    >
      <div>
        <FcCalendar className="inline" /> {metadata?.date}
      </div>
      <div>
        <FcClock className="inline" /> {readingTime}
      </div>
      <div className="text-sm text-gray-500">
        <RiEye2Line className="inline" /> {counter} views
      </div>
    </div>
  );
}
