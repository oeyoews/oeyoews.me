import Link from 'next/link';

import { getLastCommit } from 'git-last-commit';

async function CommitInfo() {
  const { hash, shortHash } = await new Promise<{
    hash: string;
    shortHash: string;
  }>((resolve) => {
    return getLastCommit((err, commit) => (err ? 'unknown' : resolve(commit)));
  });

  return (
    <Link
      href={`https://github.com/oeyoews/nextjs-mdx-blog/commit/${hash}`}
      target="_blank"
      title="查看最后一次提交变更"
    >
      <button className="text-neutral-300 dark:text-neutral-800 font-serif select-none ml-4">
        Build {shortHash}
      </button>
    </Link>
  );
}

export default CommitInfo;
