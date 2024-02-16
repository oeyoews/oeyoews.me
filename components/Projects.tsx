import { Article } from './ArticleComponents';
import MarkdownItRenderer from './MarkdownIt';

import config from '~config';

export default function Projects() {
  if (process.env.NODE_ENV === 'development') return <>本地不可见</>;

  let data: string = '';

  // TODO: 可能会得到速率限制，后期使用 customfetch
  fetch(config.projects)
    .then((res) => res.text())
    .then((result) => {
      data = result;
    });

  return (
    <Article>
      <MarkdownItRenderer content={data} />
    </Article>
  );
}
