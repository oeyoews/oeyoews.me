'use client';

import GithubIssueItem from '~components/GitHubIssue/GithubIssueItem';
import YearHeader from '~components/PostList/YearHeader';

export default function GithubIssueList({ issues }: { issues: Issue[] }) {
  let currentYear: number;

  const sortByDate = (a: Issue, b: Issue) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  };

  const GithubIssueListContent = () => (
    <ul className="list-none my-4 prose dark:prose-invert">
      {issues
        .filter((issue) => issue.state_reason !== 'not_planned')
        .sort(sortByDate)
        .map((issue, index) => {
          const { title, updated_at } = issue;
          const postYear = new Date(updated_at).getFullYear();
          const yearHeader = currentYear !== postYear && (
            <YearHeader postYear={postYear} />
          );
          currentYear = postYear;

          return (
            <li key={title} className="group">
              {yearHeader}
              <GithubIssueItem issue={issue} index={index} />
            </li>
          );
        })}
    </ul>
  );

  return <GithubIssueListContent />;
}
