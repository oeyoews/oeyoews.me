import Markdown from 'react-markdown';

import { Code } from 'bright';
import rehypeRaw from 'rehype-raw';
// @ts-ignore
import remarkContainer from 'remark-custom-container';
import remarkEmoji from 'remark-emoji';

Code.lineNumbers = true;
Code.theme = 'one-dark-pro';

export default function IssueComponent({
  text,
}: {
  text: string;
}): React.ReactNode {
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
      // container not work, be hidden
      remarkPlugins={[[remarkContainer, { className: '' }], remarkEmoji]} // gfm table will cause error
      rehypePlugins={[rehypeRaw]}
      skipHtml={false}
      components={components}
    >
      {text}
    </Markdown>
  );
}