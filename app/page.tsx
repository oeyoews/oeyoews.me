import Link from 'next/link';

import Icon from '~ui/Icon';
import { DraftSkeleton } from '~ui/Skeleton/Skeleton';

const page = () => {
  // > 此网站分为 [mdx](https://github.com/oeyoews/nextjs-mdx-blog/content), [tiddlers](https://github.com/oeyoews/neotw-tiddlers),[issues](https://github.com/oeyoews/neotw-tiddlers/issues) 三部分组成
  const sections = [
    {
      name: 'mdx',
      link: 'https://github.com/oeyoews/nextjs-mdx-blog/tree/main/content',
      icon: 'vscode-icons:file-type-light-mdx',
    },
    {
      name: 'tiddlers',
      link: 'https://github.com/oeyoews/neotw-tiddlers',
      icon: 'simple-icons:tiddlywiki',
    },
    {
      name: 'issues',
      link: 'https://github.com/oeyoews/neotw-tiddlers/issues?q=is%3Aissue+is%3Aclosed',
      icon: 'octicon:issue-opened-16',
    },
  ];

  return (
    // 有时list-disc 不显示
    <div className="prose max-w-none">
      <div className="flex justify-center space-x-2 my-2">
        {sections.map((section, index) => (
          <div key={index}>
            <button className="btn">
              <Link
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                title={section.name}
              >
                <span className="mx-1 capitalize">{section.name}</span>
                <Icon icon={section.icon} className="h-4 w-4" />
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
