import { format } from 'date-fns';
import formatTitle from '~lib/formatTitle';
import MarkdownWrapper from '~ui/MarkdownWrapper';

export default async function Issue({
  issue,
  comments,
}: {
  issue: Issue;
  comments: IssueComment[];
}) {
  const { title, created_at, body } = issue;
  const date = format(new Date(created_at), 'yyyy-MM-dd');

  const Comments = () => {
    return comments.map(({ body, id, user: { avatar_url, login } }) => (
        <MarkdownWrapper text={body} key={id} />
    ));
  };

  return (
    <div className="prose max-w-none mb-8 overflow-auto">
      <h1 className="my-8 capitalize text-balance">{formatTitle(title)}</h1>
      <div className="not-prose flex justify-center space-x-2 text-gray-800 font-mono">
        <div className="rounded px-1 bg-neutral-200/80">{date}</div>
      </div>
      {body && <MarkdownWrapper text={`${body}`} enableGFM={false} />}
      <Comments />
    </div>
  );
}
