import Markdown from 'react-markdown';

import Link from 'next/link';

import getIssues, { getIssuesInfo } from '../lib/getIssues';

import { Code } from 'bright';
import rehypeRaw from 'rehype-raw';
import remarkGFM from 'remark-gfm';

Code.lineNumbers = true;
Code.theme = 'one-dark-pro';

export default async function IssueComponent() {
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
  const issuesInfo = await getIssuesInfo();
  const issues = await getIssues();

  return (
    <div className="prose prose-indigo max-w-4xl">
      <h2>
        neotw issues ({issues.length}) {issuesInfo.open_issues}
      </h2>
      {issues.map(({ id, number, html_url, title, body, labels }: any) => (
        <div key={id}>
          <Link href={html_url} target="_blank">
            <h2 className="my-2">
              {title} #{number}
            </h2>
            {labels.length > 0 && (
              <span className="bg-slate-200">{labels.name}</span>
            )}
          </Link>
          <Markdown
            // @ts-ignore
            // remarkPlugins={[remarkGFM]} // @see https://github.com/remarkjs/react-markdown/issues/794
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
            components={components}
          >
            {body}
          </Markdown>
        </div>
      ))}
    </div>
  );
}
