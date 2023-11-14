import { BsBook, BsCircle, BsFiletypeMdx, BsWikipedia } from 'react-icons/bs';

import Link from 'next/link';

export default function Nav() {
  const LinkClass = 'w-5 h-5';
  return (
    <div className="flex items-center justify-between print:hidden mb-8 sticky top-0 left-0 z-[1000] backdrop-blur-sm p-4 bg-white/30 max-w-4xl mx-auto ">
      <nav className="ml-auto text-sm font-medium space-x-6 flex flex-row">
        <Link href="/" title="Home">
          <BsBook className={LinkClass} />
        </Link>
        <Link href="/posts" title="Blog">
          <BsFiletypeMdx className={LinkClass} />
        </Link>
        <Link href="/tiddlers" title="tiddlers">
          <BsWikipedia className={LinkClass} />
        </Link>
        <Link href="/github" title="issues">
          <BsCircle className={`${LinkClass}`} />
        </Link>
      </nav>
    </div>
  );
}
