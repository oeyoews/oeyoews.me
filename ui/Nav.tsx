import React from 'react';
import { BsBook, BsCircle, BsFiletypeMdx, BsWikipedia } from 'react-icons/bs';
import { SiTiddlywiki } from 'react-icons/si';

import Image from 'next/image';
import Link from 'next/link';

import nextjsImage from '~public/512x512.png';

export default function Nav() {
  const LinkClass = 'w-5 h-5 shadownone';

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
      path: '/github',
      icon: <BsCircle />,
    },
  ];

  return (
    <div className="navbar bg-base-200 backdrop-blur-md sticky  top-0 inset-x-0 py-0">
      <div className="flex-1 space-x-1 hidden md:block">
        <Link href={'/'} className="btn btn-ghost text-xl">
          {/* <Image src={nextjsImage} className="avatar w-4" alt="logo" /> */}
          NextJs Blog
        </Link>
      </div>
      <div className="flex-none">
        <ul className="">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="btn btn-ghost"
              data-tip={link.title}
            >
              {React.cloneElement(link.icon, { className: LinkClass })}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
