import Markdown from 'react-markdown';

import { Code } from 'bright';
import rehypeRaw from 'rehype-raw';
import remarkContainer from 'remark-custom-container';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';

Code.lineNumbers = true;
Code.theme = 'one-dark-pro';

export default function MarkdownWrapper({
  text,
  classNames,
}: {
  text: string | null;
  classNames?: string;
}) {
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

  return (
    <Markdown
      // @ts-ignore
      remarkPlugins={[[remarkContainer], remarkEmoji, remarkGfm]} // gfm table will cause error
      rehypePlugins={[rehypeRaw]}
      skipHtml={false}
      components={components}
      className={classNames}
    >
      {text}
    </Markdown>
  );
}
