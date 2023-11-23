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
      className="text-gray-400"
      target="_blank"
      title="查看最后一次提交变更"
    >
      <button className="rounded px-1 font-semibold text-gray-200">
        Build {shortHash}
      </button>
    </Link>
  );
}

export default CommitInfo;
