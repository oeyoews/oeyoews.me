import Markdown from 'react-markdown';

import { Code } from 'bright';
// @ts-ignore
import remarkContainer from 'remark-custom-container';
import remarkEmoji from 'remark-emoji';

Code.lineNumbers = true;
Code.theme = 'one-dark-pro';

export default function TiddlerComponents({
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
      skipHtml={true}
      components={components}
    >
      {text}
    </Markdown>
  );
}
