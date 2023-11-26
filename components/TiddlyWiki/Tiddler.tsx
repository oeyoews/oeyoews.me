import Image from 'next/image';

import clsx from 'clsx';
import { format } from 'date-fns';
import MarkdownWrapper from '~components/MarkdownWrapper';
import formatTitle from '~lib/formatTitle';

export default async function Tiddler({ tiddler }: { tiddler: Tiddler }) {
  const {
    title,
    text,
    tags,
    creator,
    date,
    'page-cover': pageCover,
    type,
  } = tiddler;

  const tagClasses = clsx('rounded px-1 bg-yellow-100', !tags && 'hidden');
  const filteredTag = tags?.split(' ').filter((tag) => !tag.startsWith('$:/'));
  const imageClasses = clsx(
    'rounded-xl object-cover object-center aspect-video h-48 shadow',
    // !pageCover && 'hidden', // 缺少src, 会有警告
  );
  const warnClassed = clsx(
    'text-center rounded p-2 my-4 text-red-500 bg-red-100',
    type === 'text/markdown' && 'hidden',
  );
  return (
    <div className="mb-8 prose dark:prose-invert">
      {pageCover && (
        <Image
          src={pageCover}
          alt={title}
          width={1200}
          height={480}
          data-fancybox="gallary"
          // placeholder="blur"
          // blurDataURL={result.metadata.dataURIBase64}
          className={imageClasses}
        />
      )}
      <h1 className="my-8 capitalize text-balance">{formatTitle(title)}</h1>
      {/* <div className="flex justify-center space-x-2 text-gray-800 font-mono">
        {creator && <div className="rounded px-1 bg-rose-50">{creator}</div>}
        {filteredTag?.map((tag) => (
          <div key={tag} className={tagClasses}>
            {tag}
          </div>
        ))}
        <div className="rounded px-1 bg-indigo-200">
          {format(date, 'yyyy-MM-dd')}
        </div>
      </div> */}
      <MarkdownWrapper text={text} />
    </div>
  );
}
