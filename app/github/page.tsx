import { Metadata } from 'next';

import formatTitle from '~app/lib/formatTitle';
import getIssues, { getIssuesInfo } from '~app/lib/getIssues';
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
    <div className="prose prose-indigo max-w-4xl">
      <h2 className="text-balance text-center capitalize mb-4">
        {formatTitle(process.env.GITHUB_REPO as string)} issues ({issues.length}
        ){/* {issuesInfo.open_issues} */}
      </h2>
      <GithubIssueList issues={issues} />
    </div>
  );
}
