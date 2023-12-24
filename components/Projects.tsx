import { Article } from './ArticleComponents';
import MarkdownItRenderer from './MarkdownIt';

import config from '~config';

export default async function Projects() {
  if (process.env.NODE_ENV === 'development') return <>本地不可见</>;

  // TODO: 可能会得到速率限制，后期使用 customfetch
  const res = await fetch(config.projects);
  const data = await res.text();

  return (
    <Article>
      <MarkdownItRenderer content={data} />
    </Article>
  );
}
