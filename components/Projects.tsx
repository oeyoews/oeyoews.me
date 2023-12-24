import { Article } from './ArticleComponents';
import MarkdownItRenderer from './MarkdownIt';

export default async function Projects() {
  const res = await fetch(
    'https://cdn.jsdelivr.net/gh/oeyoews/oeyoews@main/README.md',
  );
  const data = await res.text();

  return (
    <Article>
      <MarkdownItRenderer content={data} />
    </Article>
  );
}
