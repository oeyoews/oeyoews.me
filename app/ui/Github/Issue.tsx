import { format } from 'date-fns';
import formatTitle from '~app/lib/formatTitle';
import MarkdownWrapper from '~app/ui/Markdown';

export default async function Issue({ issue }: { issue: Issue }) {
  const { title, created_at, body, html_url } = issue;
  const date = format(new Date(created_at), 'yyyy-MM-dd');

  return (
    <div className="prose prose-indigo max-w-none mb-8">
      <h1 className="my-8 capitalize text-balance">{formatTitle(title)}</h1>
      <div className="not-prose flex justify-center space-x-2 text-gray-800 font-mono">
        <div className="rounded px-1 bg-indigo-200">{date}</div>
      </div>
      <MarkdownWrapper text={body} />
    </div>
  );
}
