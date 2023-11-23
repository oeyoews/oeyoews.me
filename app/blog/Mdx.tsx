import { MDXRemote } from 'next-mdx-remote/rsc';

import { Code } from 'bright';
import Icon from '~components/Icon';

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

const MDX = ({ source }: { source: any }) => {
  return (
      <MDXRemote
        components={components}
        source={source}
      />
  );
};

export default MDX;
