import { Metadata } from 'next';

import getIssues from '~app/lib/getIssues';
import CalendarHeatmapComponent from '~app/ui/CalendarPost';
import GithubIssueList from '~app/ui/Github/GithubIssueList';

export function generateMetadata(): Metadata {
  return {
    title: 'neotw issues',
    description: 'neotw issues',
  };
}

export default async function IssueComponent() {
  // const issuesInfo = await getIssuesInfo();
  const issues = await getIssues();

  return (
    <>
      <CalendarHeatmapComponent datas={issues} />
      <GithubIssueList issues={issues} />
    </>
  );
}
