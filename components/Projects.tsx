import { Article } from './ArticleComponents';
import MarkdownItRenderer from './MarkdownIt';

import config from '~config';

export default async function Projects() {
  // if (process.env.NODE_ENV === 'development') return <>本地不可见</>;

  try {
    const res = await fetch(config.projects, {
      credentials: 'include',
      mode: 'cors'
    });
    if (!res.ok) return;
    const data = await res.text();
    // TODO: 可能会得到速率限制，后期使用 customfetch

    return (
      <Article>
        <MarkdownItRenderer content={data} />
      </Article>
    );
  } catch (e) {}
}
