import Image from 'next/image';

import formatTitle from '@/app/lib/formatTitle';
import Fancybox from '@/app/ui/Fancybox';
import Icon from '@/app/ui/Icon';
import TiddlerComponents from '@/app/ui/TiddlyWiki/TiddlerComponents';
import clsx from 'clsx';
import { format } from 'date-fns';

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
    <div className="prose prose-indigo max-w-none mb-8">
      {pageCover && (
        <Fancybox>
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
        </Fancybox>
      )}
      <h1 className="my-8 capitalize text-balance">{formatTitle(title)}</h1>
      <div className={warnClassed}>
        <Icon icon="openmoji:warning" inline={true} className="mx-2" />
        这不是一个Markdown类型的文章
      </div>
      <div className="not-prose flex justify-center space-x-2 text-gray-800 font-mono">
        {creator && <div className="rounded px-1 bg-rose-50">{creator}</div>}
        {filteredTag?.map((tag) => (
          <div key={tag} className={tagClasses}>
            {tag}
          </div>
        ))}
        <div className="rounded px-1 bg-indigo-200">
          {format(date, 'yyyy-MM-dd')}
          {/* {date.toISOString().split('T')[0]} */}
        </div>
      </div>
      <TiddlerComponents text={text} />
    </div>
  );
}
