import { lazy } from 'react';

import { Metadata } from 'next';

import { getAllIssues } from '~app/lib/getIssues';
import FirstLoading from '~app/ui/FirstLoading';
import GithubIssueList from '~app/ui/Github/GithubIssueList';

const CalendarHeatmapComponent = lazy(() => import('~app/ui/CalendarPost'));

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
