import Link from 'next/link';

import fs from 'fs';
import path from 'path';
import { H2 } from '~components/ArticleComponents';
import { Article } from '~components/ArticleComponents';
import Icon from '~components/Icon';
import MarkdownRenderer from '~components/MarkdownIt';
import config from '~site/config';

const page = () => {
  const content = fs.readFileSync(
    path.join(process.cwd(), 'README.md'),
    'utf-8',
  );
  return (
    <Article>
      <MarkdownRenderer content={content} />
      <H2>External Links</H2>
      <div className="mx-2 flex justify-center items-center space-x-2">
        {config.sections.map((section) => (
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
    </Article>
  );
};

export default page;
