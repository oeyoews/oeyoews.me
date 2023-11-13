import { Metadata } from 'next';

import getIssues, { getIssuesInfo } from '../lib/getIssues';
import GithubIssueList from '../ui/Github/GithubIssueList';

export function generateMeta(): Metadata {
  return {
    title: 'neotw issues',
    description: 'neotw issues',
  };
}

export default async function IssueComponent() {
  const issuesInfo = await getIssuesInfo();
  const issues = await getIssues();

  return (
    <div className="prose prose-indigo max-w-4xl">
      <h2>
        neotw issues ({issues.length}) {issuesInfo.open_issues}
      </h2>
      <GithubIssueList issues={issues} />
    </div>
  );
}
