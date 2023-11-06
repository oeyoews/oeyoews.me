import Markdown from 'react-markdown';

import { Code } from 'bright';
import rehypeSlug from 'rehype-slug';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

async function getData() {
  const res = await fetch('https://neotw.oeyoewl.top/markdown.json');
  //  const res = await fetch('http://127.0.0.1:8000/tiddlers.json');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data: {
    title: string;
    text: string;
    tags: string;
    type: string;
    created: string;
    creator: string;
    modified: string;
  }[] = await getData();

  const components = {
    pre: ({
      children,
      ...props
    }: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLPreElement
    >) => {
      return (
        <Code {...props} className="not-prose">
          {children}
        </Code>
      );
    },
  };

  Code.lineNumbers = true;
  Code.theme = 'one-dark-pro';

  const filtedData = data.filter(
    ({ title, type, tags }) => !(type !== 'text/markdown'),
  );

  const tiddlers = filtedData
    .sort((a, b) => (a.created > b.created ? -1 : 1))
    .slice(0, 99)
    .map(({ title, tags, created, text, creator }) => {
      const formattedDate =
        created?.substring(0, 4) +
        '-' +
        created?.substring(4, 6) +
        '-' +
        created?.substring(6, 8);
      return (
        <div key={title} className="prose prose-indigo max-w-none mb-8">
          <h1 className="my-4 truncate capitalize text-balance">
            {title.replace(/-/g, ' ')}
          </h1>
          <div className="not-prose flex justify-center space-x-2 text-gray-800 font-mono">
            <div className="rounded px-1 bg-rose-50">{creator}</div>
            {tags && <div className="rounded px-1 bg-yellow-100 ">{tags}</div>}
            <div className="rounded px-1 bg-indigo-200">{formattedDate}</div>
          </div>

          <Markdown
            remarkPlugins={[remarkEmoji]}
            // @ts-ignore
            rehypePlugins={[rehypeSlug, remarkToc]}
            skipHtml={false}
            components={components}
          >
            {text}
          </Markdown>
        </div>
      );
    });

  return <>{tiddlers}</>;
}
