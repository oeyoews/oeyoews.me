import { BsBook, BsCircle, BsFiletypeMdx, BsWikipedia } from 'react-icons/bs';

// blog config
const config = {
  title: 'Blog with NextJs',
  content: 'content', // mdx directory
  json:
    process.env.NODE_ENV === 'development'
      ? 'https://colorplay.tiddlyhost.com/tiddlers.json'
      : 'https://neotw.vercel.app/tiddlers.json', // tiddler file
  githubRepo: 'oeyoews/neotw-tiddlers', // issue repo
  description: 'Nextjs + TypeScript + Tailwindcss + MDX',
  links: [
    // {
    //   title: 'Home',
    //   path: '/',
    //   icon: <BsBook />,
    // },
    {
      title: 'Blog',
      path: '/blog',
      icon: <BsFiletypeMdx />,
    },
    {
      title: 'tiddlers',
      path: '/tiddlers',
      icon: <BsWikipedia />,
    },
    {
      title: 'issues',
      path: '/issue',
      icon: <BsCircle />,
    },
  ],
};

export default config;
