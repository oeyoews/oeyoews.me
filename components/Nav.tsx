import { FcAdvertising, FcIdea, FcPlanner } from 'react-icons/fc';
import { SiTiddlywiki } from 'react-icons/si';

import Link from 'next/link';

import Music from './Music';

export default function Nav() {
  const LinkClass = 'w-5 h-5';
  return (
    <div className="flex items-center justify-between print:hidden mb-8">
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
        <Link href="/neotw" title="neotw">
          <SiTiddlywiki
            className={`${LinkClass} fill-indigo-400 scale-x-[-1]`}
          />
        </Link>
        <Link href="/about" title="About">
          <FcAdvertising className={LinkClass} />
        </Link>
        <Music />
      </nav>
    </div>
  );
}
