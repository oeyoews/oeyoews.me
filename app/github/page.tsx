import { Metadata } from 'next';

import { getAllIssues } from '~lib/getIssues';
import GithubIssueList from '~components/Github/GithubIssueList';

export function generateMetadata(): Metadata {
  return {
    title: 'neotw issues',
    description: 'neotw issues',
  };
}

export default async function IssueComponent() {
  const issues = await getAllIssues();

  return <GithubIssueList issues={issues} />;
}
