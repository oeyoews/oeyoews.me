'use client';

import { motion } from 'framer-motion';
import GithubIssueItem from '~app/ui/Github/GithubIssueItem';
import YearHeader from '~app/ui/PostList/YearHeader';

export default function GithubIssueList({ issues }: { issues: Issue[] }) {
  let currentYear: number;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const GithubIssueListContent = () => (
    <motion.ol
      className="prose list-none my-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {issues.map((issue, index) => {
        const { title, created_at } = issue;
        const postYear = new Date(created_at).getFullYear();
        const yearHeader = currentYear !== postYear && (
          <YearHeader postYear={postYear} />
        );
        currentYear = postYear;

        return (
          <motion.li key={title}
            // variants={item}
            className="group">
            {yearHeader}
            <GithubIssueItem issue={issue} index={index} />
          </motion.li>
        );
      })}
    </motion.ol>
  );

  return <GithubIssueListContent />;
}
