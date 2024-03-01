'use client';

import useList from '~lib/hooks/useList';

import GithubIssueItem from '~components/GitHubIssue/GithubIssueItem';
import LoadMore from '~components/LoadMore';
import Timeline from '~components/Timeline';
import YearHeader from '~components/YearHeader';

export default function GithubIssueList({ issues }: { issues: Issue[] }) {
  let currentYear: number;
  const { list, handleLoadItems } = useList();

  const sortByDate = (a: Issue, b: Issue) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  };

  const filteredIssues = issues.filter(
    (issue) =>
      !(
        issue.state_reason === 'not_planned' ||
        Object.hasOwn(issue, 'pull_request')
      )
  );

  const GithubIssueListContent = () => (
    <Timeline>
      {filteredIssues
        .sort(sortByDate)
        .slice(0, list)
        .map((issue, index) => {
          const { title, updated_at } = issue;
          const postYear = new Date(updated_at).getFullYear();
          const yearHeader = currentYear !== postYear && (
            <YearHeader postYear={postYear} />
          );
          currentYear = postYear;

          return (
            <GithubIssueItem
              issue={issue}
              index={index}
              key={title}
              order={index === filteredIssues.length - 1 ? 'end' : 'normal'}
            >
              {yearHeader}
            </GithubIssueItem>
          );
        })}

      <LoadMore data={issues} />
    </Timeline>
  );

  return <GithubIssueListContent />;
}
