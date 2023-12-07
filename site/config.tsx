import { BsFiletypeMdx, BsHouse, BsJournal, BsWikipedia } from 'react-icons/bs';
import { FaRegDotCircle } from 'react-icons/fa';

const testFile = 'http://localhost:3000/tiddlers.json';

const config = {
  steps: 10,
  title: 'Blog with NextJs',
  content: 'content', // mdx directory
  journalJson:
    process.env.NODE_ENV === 'development'
      ? testFile
      : 'https://neotw.vercel.app/journal.json',
  json:
    process.env.NODE_ENV === 'development'
      ? testFile
      : 'https://neotw.vercel.app/tiddlers.json', // tiddler file
  githubRepo: 'oeyoews/neotw-tiddlers', // issue repo
  description: 'Nextjs + TypeScript + Tailwindcss + MDX',
  domain: 'https://nextjs-mdx-blog-tailwindcss.vercel.app',
  enableTOC: false, // WIP
  links: [
    {
      title: 'Home',
      path: '/',
      icon: <BsHouse />,
    },
    {
      title: 'Blog',
      path: '/blog',
      icon: <BsFiletypeMdx />,
    },
    {
      title: 'journal',
      path: '/journal',
      icon: <BsJournal />,
    },
    {
      title: 'tiddlers',
      path: '/tiddlers',
      icon: <BsWikipedia />,
    },
    {
      title: 'issues',
      path: '/issue',
      icon: <FaRegDotCircle />,
    },
  ],
  sections: [
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
  ],
};

export default config;
