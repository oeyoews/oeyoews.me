import { FcApproval, FcFolder, FcOpenedFolder } from 'react-icons/fc';

import Link from 'next/link';

import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';

export default function HomePage() {
  if (allPosts.length === 0) {
    return (
      <div className="prose">
        <h1 className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          当前文章数目为零
        </h1>
      </div>
    );
  }

  let currentYear: any = null;
  const zodiacSigns = [
    '🐭',
    '🐮',
    '🐯',
    '🐰',
    '🐲',
    '🐍',
    '🐴',
    '🐑',
    '🐵',
    '🐔',
    '🐶',
    '🐷',
    // '鼠',
    // '牛',
    // '虎',
    // '兔',
    // '龙',
    // '蛇',
    // '马',
    // '羊',
    // '猴',
    // '鸡',
    // '狗',
    // '猪',
  ];

  return (
    <ol className="prose relative list-none border-gray-100/80 border-l-4">
      {allPosts
        .sort((a, b) => {
          return a.date > b.date ? -1 : 1;
        })
        .map((post) => {
          const postYear = new Date(post.date).getFullYear();
          const zodiacIndex = (postYear - 1900) % 12; // 基准年份为1900年

          const yearHeader =
            currentYear !== postYear ? (
              <li className="text-xs">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 bg-white">
                  <FcApproval className="h-4 w-4 text-gray-400 duration-300 transition-all group-hover:stroke-indigo-500" />
                </span>
                <h2
                  key={`year-header-${postYear}`}
                  className="ml-6 text-neutral-200/80 font-serif"
                >
                  {postYear}
                  {/* <span className="transition-all duration-400">
                    {zodiacSigns[zodiacIndex]}
                  </span> */}
                </h2>
              </li>
            ) : null;

          currentYear = postYear;

          return (
            <>
              <article key={post._id}>
                {yearHeader}
                <li className="ml-6 group">
                  <Link
                    href={post.slug}
                    className="text-xs rounded-md"
                    title="点击阅读更多"
                  >
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 bg-white">
                      <FcFolder className="group-hover:hidden h-4 w-4 text-gray-400 duration-300 transition-all group-hover:stroke-indigo-500" />
                      <FcOpenedFolder className="hidden group-hover:block h-4 w-4 text-gray-400 duration-300 transition-all group-hover:stroke-indigo-500" />
                    </span>
                    <h2 className="text-neutral-700 hover:text-neutral-950 duration-300 transition">
                      {post.title}
                    </h2>
                    <time className="block text-sm font-normal leading-none text-gray-400">
                      {format(new Date(post.date), 'EEE, MMMM d')}
                    </time>
                  </Link>
                </li>
              </article>
            </>
          );
        })}
    </ol>
  );
}
