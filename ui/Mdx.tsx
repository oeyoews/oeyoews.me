import { useMDXComponent } from 'next-contentlayer/hooks';

import { Code } from 'bright';
import Icon from '~ui/Icon';

Code.lineNumbers = false;
Code.theme = 'one-dark-pro';

const components = {
  Icon,
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

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
