import { Code } from 'bright';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents) {
  Code.lineNumbers = false;
  Code.theme = 'one-dark-pro';
  return {
    pre: ({
      children,
      ...props
    }: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLPreElement
    >) => {
      // TODO: extract title from children
      return (
        <Code {...props} className="rounded-none">
          {children as any}
        </Code>
      );
    },
  };
}
