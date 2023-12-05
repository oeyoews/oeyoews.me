import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Article, Divider, H1 } from '~components/ArticleComponents';
import DrawserComponent from '~components/DrawserComponent';
import MarkdownWrapper from '~components/MarkdownWrapper';
import formatTitle from '~lib/formatTitle';
import {
  getAllIssues,
  getIssueBySlug,
  getIssueComments,
} from '~lib/issues/getIssues';

export const revalidate = 60;

export async function generateStaticParams() {
  const issues = await getAllIssues();
  return issues.map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const issue = await getIssueBySlug(slug);
  return {
    title: issue?.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const issue = await getIssueBySlug(params.slug);
  const comments = await getIssueComments(issue?.number as number);

  if (!issue) {
    return notFound();
  }

  return (
    <Article>
      <H1>{formatTitle(issue.title)}</H1>
      <Divider />
      {issue.body && (
        <MarkdownWrapper text={`${issue.body}`} enableGFM={false} />
      )}
      {comments.length > 0 && (
        <DrawserComponent text="Comments">
          {comments.map(({ body, id }) => (
            <MarkdownWrapper text={body} key={id} />
          ))}
        </DrawserComponent>
      )}
    </Article>
  );
}
