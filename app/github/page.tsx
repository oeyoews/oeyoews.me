import { getAllIssues } from '~lib/getIssues';
import FirstLoading from '~ui/FirstLoading';
import GithubIssueList from '~ui/Github/GithubIssueList';

export const metadata = {
  title: 'issues',
  description: 'issues',
};

export default async function IssueComponent() {
  const issues = await getAllIssues();

  return (
    <>
      <FirstLoading />
      <GithubIssueList issues={issues} />
    </>
  );
}
