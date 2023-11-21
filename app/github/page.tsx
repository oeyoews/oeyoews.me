import { lazy } from 'react';

import { Metadata } from 'next';

import { getAllIssues } from '~lib/getIssues';
import FirstLoading from '~ui/FirstLoading';
import GithubIssueList from '~ui/Github/GithubIssueList';

const CalendarHeatmapComponent = lazy(() => import('~ui/CalendarPost'));

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
