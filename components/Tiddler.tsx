import Markdown from 'react-markdown';

import { Code } from 'bright';
import rehypeSlug from 'rehype-slug';
import remarkEmoji from 'remark-emoji';
import remarkToc from 'remark-toc';

Code.lineNumbers = true;
Code.theme = 'one-dark-pro';

export default function Tiddler(tiddler: Tiddler) {
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

  const { title, text, tags, creator, created } = tiddler;

  const formattedDate =
    created?.substring(0, 4) +
    '-' +
    created?.substring(4, 6) +
    '-' +
    created?.substring(6, 8);
  return (
    <>
      <div className="prose prose-indigo max-w-none mb-8">
        <h1 className="my-4 truncate capitalize text-balance">
          {title.replace(/-/g, ' ')}
        </h1>
        <div className="not-prose flex justify-center space-x-2 text-gray-800 font-mono">
          <div className="rounded px-1 bg-rose-50">{creator}</div>
          {tags && <div className="rounded px-1 bg-yellow-100 ">{tags}</div>}
          <div className="rounded px-1 bg-indigo-200">{formattedDate}</div>
        </div>

        <Markdown
          // @ts-ignore
          remarkPlugins={[remarkEmoji]} // gfm table will cause error
          // @ts-ignore
          rehypePlugins={[rehypeSlug, remarkToc]}
          skipHtml={false}
          components={components}
        >
          {text}
        </Markdown>
      </div>
    </>
  );
}
