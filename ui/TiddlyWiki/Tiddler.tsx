import Image from 'next/image';

import clsx from 'clsx';
import { format } from 'date-fns';
import formatTitle from '~lib/formatTitle';
import { Divider, H1 } from '~ui/Article';
import Fancybox from '~ui/Fancybox';
import Icon from '~ui/Icon';
import MarkdownWrapper from '~ui/MarkdownWrapper';
import Badge from '~ui/PostList/PostBadges';

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
      <H1 title={formatTitle(title)} />
      <Divider />
      {/* <div className={warnClassed}>
        这不是一个Markdown类型的文章
        <Icon icon="openmoji:warning" inline={true} className="mx-2" />
      </div> */}
      <div className="text-center space-x-2">
        {creator && <Badge text={creator} />}
        {filteredTag?.map((tag) => (
          <Badge text={tag} key={tag} className="rounded-sm" />
        ))}
        <Badge text={format(date, 'yyyy-MM-dd')} className="rounded-sm" />
      </div>
      <MarkdownWrapper text={text} />
    </div>
  );
}
