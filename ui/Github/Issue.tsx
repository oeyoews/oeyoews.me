import { format } from 'date-fns';
import formatTitle from '~lib/formatTitle';
import { Divider, H1 } from '~ui/Article';
import MarkdownWrapper from '~ui/MarkdownWrapper';
import Badge from '~ui/PostList/PostBadges';

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
      <div key={id}>
        <MarkdownWrapper text={body} />
      </div>
    ));
  };

  return (
    <div className="prose prose-indigo max-w-none mb-8 overflow-auto">
      <H1 title={formatTitle(title)} />
      <Divider />
      <div className="text-center">
        <Badge text={date} className="badage rounded-sm" />
      </div>
      {body && <MarkdownWrapper text={`${body}`} enableGFM={false} />}
      <Comments />
    </div>
  );
}
