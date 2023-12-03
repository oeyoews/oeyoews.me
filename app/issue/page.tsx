import GithubIssueList from '~components/GitHubIssue/GithubIssueList';
import { getAllIssues } from '~lib/issues/getIssues';

export const metadata = {
  title: 'issues',
  description: 'issues',
};

export default async function IssueComponent() {
  const issues = await getAllIssues();

  // console.log(issues.map((issue) => issue.number === 2 && issue));

  return <GithubIssueList issues={issues} />;
}
