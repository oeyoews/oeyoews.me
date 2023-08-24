import {
  FcAdvertising,
  FcDatabase,
  FcFlashOn,
  FcGrid,
  FcIdea,
  FcPlanner,
} from 'react-icons/fc';

import Link from 'next/link';

import Music from './Music';
import VaulButton from './VaulButton';

import HomePage from '@/app/posts/page';

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
        <Link href="/feed.xml" title="Rss" target="_blank">
          <FcFlashOn className={LinkClass} />
        </Link>
        <VaulButton
          buttonText={<FcDatabase className={LinkClass} />}
          title="文章列表"
        >
          <HomePage />
        </VaulButton>
        <Link href="/about" title="About">
          <FcAdvertising className={LinkClass} />
        </Link>
        <Link href="/game" title="Game">
          <FcGrid className={LinkClass} />
        </Link>
        <Music />
      </nav>
    </div>
  );
}
