import Link from 'next/link';

import fs from 'fs';
import path from 'path';
import { H2 } from '~components/ArticleComponents';
import { Article } from '~components/ArticleComponents';
import MarkdownItRenderer from '~components/MarkdownIt';
import config from '~config';

const Page = () => {
  const content = fs.readFileSync(
    path.join(process.cwd(), 'README.md'),
    'utf-8'
  );
  return (
    <Article>
      <MarkdownItRenderer content={content} />
      <H2>External Links</H2>
      <table>
        <thead>
          <tr>
            <th>分类</th>
            <th>链接</th>
          </tr>
        </thead>
        <tbody>
          {config.sections.map((section) => (
            <tr key={section.link}>
              <td className='capitalize'>{section.name}</td>
              <td>
                <Link
                  href={section.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Article>
  );
};

export default Page;
