import React from 'react';
import { BsBook, BsFiletypeMdx, BsWikipedia } from 'react-icons/bs';
import { SiTiddlywiki } from 'react-icons/si';

import Link from 'next/link';

export default function Nav() {
  const LinkClass = 'w-5 h-5';

  const links = [
    {
      title: 'Home',
      path: '/',
      icon: <BsBook />,
    },
    {
      title: 'tiddlywiki',
      path: '/tiddlywiki',
      icon: <SiTiddlywiki />,
    },
    {
      title: 'Blog',
      path: '/posts',
      icon: <BsFiletypeMdx />,
    },
    {
      title: 'tiddlers',
      path: '/tiddlers',
      icon: <BsWikipedia />,
    },
  ];

  return (
    <div className="flex items-center justify-between print:hidden mb-8 sticky top-0 left-0 z-[1000] backdrop-blur-sm p-4 bg-white/30 mx-auto sm:px-2 md:px-48 w-full ">
      <nav className="ml-auto text-sm font-medium space-x-6 flex flex-row">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className="flex items-center space-x-2 text-neutral-700 hover:text-neutral-950 duration-300 transition"
          >
            {React.cloneElement(link.icon, { className: LinkClass })}
          </Link>
        ))}
      </nav>
    </div>
  );
}
