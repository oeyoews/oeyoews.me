import { Article } from './ArticleComponents';
import MarkdownItRenderer from './MarkdownIt';

import config from '~config';

export default async function Projects() {
  const res = await fetch(config.projects);
  const data = await res.text();

  return (
    <Article>
      <MarkdownItRenderer content={data} />
    </Article>
  );
}
