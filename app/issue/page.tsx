import GithubIssueList from '~components/GitHubIssue/GithubIssueList';
import { getAllIssues } from '~lib/getIssues';

export const metadata = {
  title: 'issues',
  description: 'issues',
};

export default async function IssueComponent() {
  const issues = await getAllIssues();

  return <GithubIssueList issues={issues} />;
}