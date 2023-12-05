import Markdown from 'react-markdown';

import { Code } from 'bright';
import rehypeRaw from 'rehype-raw';
import remarkContainer from 'remark-custom-container';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';

Code.lineNumbers = true;
Code.theme = 'one-dark-pro';

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

export default function MarkdownWrapper({
  text,
  classNames,
  enableGFM = false,
}: {
  text: string | null;
  classNames?: string;
  enableGFM?: boolean;
}) {
  const remarkPlugins = [remarkContainer, remarkEmoji];
  // @ts-ignore
  enableGFM && remarkPlugins.push(remarkGfm);

  return (
    <Markdown
      remarkPlugins={remarkPlugins}
      rehypePlugins={[rehypeRaw]}
      skipHtml={false}
      components={components}
      className={classNames}
    >
      {text}
    </Markdown>
  );
}
