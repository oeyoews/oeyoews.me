import {
  format,
  formatDistance,
  formatDistanceToNow,
  formatRelative,
} from 'date-fns';
import { Article, Divider, H1 } from '~components/ArticleComponents';
import MarkdownWrapper from '~components/MarkdownWrapper';
import formatTitle from '~lib/formatTitle';

export default async function Issue({
  issue,
  comments,
}: {
  issue: Issue;
  comments: IssueComment[];
}) {
  const { title, created_at, body } = issue;
  const date = format(new Date(created_at), 'MMMM d, yyyy');
  const relativeDate = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
  });

  const Comments = () => {
    return comments.map(({ body, id, user: { avatar_url, login } }) => (
      <MarkdownWrapper text={body} key={id} />
    ));
  };

  return (
    <Article>
      <H1>{formatTitle(title)}</H1>
      {/* <div className="not-prose flex justify-center space-x-2 text-gray-800 font-mono"> */}
      <div className="text-sm text-center">
        {date}({relativeDate})
      </div>
      {/* </div> */}
      <Divider />
      {body && <MarkdownWrapper text={`${body}`} enableGFM={false} />}
      <Comments />
    </Article>
  );
}
