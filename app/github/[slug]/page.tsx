import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import getIssues, { getAllIssues, getIssueBySlug } from '~app/lib/getIssues';
import Issue from '~app/ui/Github/Issue';

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
  if (!issue) {
    return notFound();
  }

  return <Issue issue={issue} />;
}
