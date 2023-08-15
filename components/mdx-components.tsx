import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

import Fancybox from './Fancybox';
import Imagec from './Imagec';

import { Code } from 'bright';

Code.lineNumbers = false;
Code.theme = 'one-dark-pro';

const components = {
  Image,
  Fancybox,
  Imagec,
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    return (
      <Code {...props} className="rounded-none">
        {children as any}
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
