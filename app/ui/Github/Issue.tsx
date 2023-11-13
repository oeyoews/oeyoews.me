import IssueComponent from './IssueComponent';

import formatTitle from '~app/lib/formatTitle';

export default async function Issue({ issue }: { issue: Issue }) {
  const { title, create_at, body } = issue;

  return (
    <div className="prose prose-indigo max-w-none mb-8">
      <h1 className="my-8 capitalize text-balance">{formatTitle(title)}</h1>
      <div className="not-prose flex justify-center space-x-2 text-gray-800 font-mono">
        <div className="rounded px-1 bg-indigo-200">{create_at}</div>
      </div>
      <IssueComponent text={body} />
    </div>
  );
}
