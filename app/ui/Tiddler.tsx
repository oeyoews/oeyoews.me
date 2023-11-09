import Image from 'next/image';

import TiddlerComponents from './TiddlerComponents';

import Icon from '@/app/ui/Icon';
import clsx from 'clsx';
import { format } from 'date-fns';

export default function Tiddler({ tiddler }: { tiddler: Tiddler }) {
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
    !pageCover && 'hidden',
  );
  const warnClassed = clsx(
    'text-center rounded p-2 my-2 text-red-500 bg-red-100',
    type === 'text/markdown' && 'hidden',
  );

  return (
    <div className="prose prose-indigo max-w-none mb-8">
      <Image
        src={pageCover}
        alt={title}
        width={1200}
        height={180}
        className={imageClasses}
      />
      <h1 className="my-8 capitalize text-balance">
        {title.replace(/-/g, ' ')}
      </h1>
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
