import Link from 'next/link';

import Icon from '~ui/Icon';

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
    <div className="prose max-w-none mx-2 flex justify-center space-x-2">
      {/* <p>网站文章由下面三部分组成</p> */}
      {sections.map((section, index) => (
        <div key={index}>
          <button className="bg-neutral-200/50 hover:bg-neutral-200/80 hover:shadow px-2 py-1 rounded m-1">
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
  );
};

export default page;
