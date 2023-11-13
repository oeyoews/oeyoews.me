import { FcIdea, FcPlanner } from 'react-icons/fc';
import { GoIssueOpened } from 'react-icons/go';
import { SiTiddlywiki } from 'react-icons/si';

import Link from 'next/link';

export default function Nav() {
  const LinkClass = 'w-5 h-5';
  return (
    <div className="flex items-center justify-between print:hidden mb-8 sticky top-0 left-0 z-[1000] backdrop-blur-sm p-4 bg-white/30 max-w-4xl mx-auto ">
      <nav className="ml-auto text-sm font-medium space-x-6 flex flex-row">
        <Link href="/" title="Home">
          <FcPlanner className={LinkClass} />
        </Link>
        <Link href="/posts" title="Blog">
          <FcIdea className={LinkClass} />
        </Link>
        <Link href="/tiddlers" title="tiddlers">
          <SiTiddlywiki className={LinkClass} />
        </Link>
        <Link href="/github" title="issues">
          <GoIssueOpened className={`${LinkClass} text-lime-700`} />
        </Link>
      </nav>
    </div>
  );
}
