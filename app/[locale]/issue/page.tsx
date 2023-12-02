import { getI18n, getScopedI18n } from '~app/locales/server';
import GithubIssueList from '~components/GitHubIssue/GithubIssueList';
import { getAllIssues } from '~lib/getIssues';

export const metadata = {
  title: 'issues',
  description: 'issues',
};

export default async function IssueComponent() {
  const scopedT = await getScopedI18n('Issues');
  const issues = await getAllIssues();

  return (
    <>
      <p>{scopedT('desc')}</p>
      <GithubIssueList issues={issues} />;
    </>
  );
}
