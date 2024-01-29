import { BsFiletypeMdx, BsHouse, BsJournal, BsWikipedia } from 'react-icons/bs';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaRegDotCircle } from 'react-icons/fa';

const testFile = 'http://localhost:3000/tiddlers.json';

const config = {
  rendertype: 'svg',
  emptyTip: '这里空空如也 !',
  steps: 10 as const,
  title: 'Blog with NextJs',
  content: 'content', // mdx directory
  jsJson:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/javascript.json'
      : 'https://neotw.vercel.app/javascript.json',
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
  enableTOC: false, // WIP // issue comment not need this toc
  md5Length: 8,
  projects: 'https://raw.githubusercontent.com/oeyoews/oeyoews/main/README.md',
  links: [
    {
      title: 'Home',
      path: '/',
      icon: <BsHouse />
    },
    {
      title: 'Blog',
      path: '/blog',
      icon: <BsFiletypeMdx />
    },
    {
      title: 'JavaScript',
      path: '/javascript',
      icon: <RiJavascriptFill />
    },
    {
      title: 'journal',
      path: '/journal',
      icon: <BsJournal />
    },
    {
      title: 'tiddlers',
      path: '/tiddlers',
      icon: <BsWikipedia />
    },
    {
      title: 'issues',
      path: '/issue',
      icon: <FaRegDotCircle />
    }
  ] as const,
  sections: [
    {
      name: 'mdx',
      link: 'https://github.com/oeyoews/nextjs-mdx-blog/tree/oeyoews/content',
      icon: 'vscode-icons:file-type-light-mdx'
    },
    {
      name: 'tiddlers',
      link: 'https://github.com/oeyoews/neotw-tiddlers',
      icon: 'simple-icons:tiddlywiki'
    },
    {
      name: 'issues',
      link: 'https://github.com/oeyoews/neotw-tiddlers/issues?q=is%3Aissue+is%3Aclosed',
      icon: 'octicon:issue-opened-16'
    }
  ]
};

export type IRoute = (typeof config.links)[number]['path'];

export default config;
