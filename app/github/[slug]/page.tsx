import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllIssues, getIssueBySlug, getIssueComments } from '~lib/getIssues';
import Issue from '~components/GitHubIssue/Issue';

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

  return <Issue issue={issue} comments={comments} />;
}
