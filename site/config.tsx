import { BsFiletypeMdx, BsJournal, BsWikipedia } from 'react-icons/bs';
import { FaRegDotCircle } from 'react-icons/fa';

const testFile = 'http://localhost:3000/tiddlers.json';

const config = {
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
  links: [
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
};

export default config;
