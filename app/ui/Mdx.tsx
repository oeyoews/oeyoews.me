import { useMDXComponent } from 'next-contentlayer/hooks';

import { Code } from 'bright';

Code.lineNumbers = false;
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

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components as any} />;
}
