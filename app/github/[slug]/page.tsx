import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import getIssues from '~app/lib/getIssues';
import Issue from '~app/ui/Github/Issue';

async function getIssueBySlug(slug: string) {
  const issues = await getIssues();
  return issues.find((issue) => issue.number === Number(slug));
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
