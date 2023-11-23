'use client';

import GithubIssueItem from '~components/GitHubIssue/GithubIssueItem';
import YearHeader from '~components/PostList/YearHeader';
import useStore from '~lib/store';

export default function GithubIssueList({ issues }: { issues: Issue[] }) {
  const statusStore = useStore();
  let currentYear: number;

  const GithubIssueListContent = () => (
    <ol className="prose list-none my-4">
      {issues.map((issue, index) => {
        const { title, created_at } = issue;
        const postYear = new Date(created_at).getFullYear();
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
    </ol>
  );

  return <GithubIssueListContent />;
}
