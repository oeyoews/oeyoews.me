import Link from 'next/link';

import Icon from '~components/Icon';

const page = () => {
  // > 此网站分为 [mdx](https://github.com/oeyoews/nextjs-mdx-blog/content), [tiddlers](https://github.com/oeyoews/neotw-tiddlers),[issues](https://github.com/oeyoews/neotw-tiddlers/issues) 三部分组成
  const sections = [
    {
      name: 'mdx',
      link: 'https://github.com/oeyoews/nextjs-mdx-blog/tree/oeyoews/content',
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
    // TODO: 有时list-disc 不显示
    <div className="mx-2 flex justify-center items-center space-x-2">
      {sections.map((section) => (
        <Link
          key={section.link}
          className="space-x-2"
          href={section.link}
          target="_blank"
          rel="noopener noreferrer"
          title={section.name}
        >
          {section.name}
          {/* NOTE: IOS 不显示 */}
          <Icon icon={section.icon} className="h-4 w-4 mx-1" />
        </Link>
      ))}
    </div>
  );
};

export default page;
