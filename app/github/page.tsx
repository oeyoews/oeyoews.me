import { Metadata } from 'next';

import { getAllIssues } from '~app/lib/getIssues';
import CalendarHeatmapComponent from '~app/ui/CalendarPost';
import FirstLoading from '~app/ui/FirstLoading';
import GithubIssueList from '~app/ui/Github/GithubIssueList';

export function generateMetadata(): Metadata {
  return {
    title: 'neotw issues',
    description: 'neotw issues',
  };
}

export default async function IssueComponent() {
  const issues = await getAllIssues();

  return (
    <>
      <FirstLoading />
      <CalendarHeatmapComponent datas={issues} />
      <GithubIssueList issues={issues} />
    </>
  );
}
