'use client';

import React, { useEffect, useState } from 'react';
import { BsBook, BsCircle, BsFiletypeMdx, BsWikipedia } from 'react-icons/bs';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

import Link from 'next/link';

import { ThemeSwitcher } from './ThemeSwitcher';

import clsx from 'clsx';

export default function Nav() {
  const LinkClass = 'w-5 h-5';

  const links = [
    {
      title: 'Home',
      path: '/',
      icon: <BsBook />,
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
      path: '/issue',
      icon: <BsCircle />,
    },
  ];
  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // 进入全屏
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      // 退出全屏
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    });
  }, []);

  return (
    <>
      <div className="flex fixed bottom-4 right-4 space-x-4">
        <ThemeSwitcher />
        <button onClick={toggleFullScreen} className="scale-150">
          {!isFullScreen ? <MdFullscreen /> : <MdFullscreenExit />}
        </button>
      </div>
      <div
        className={clsx(
          'flex items-center justify-between print:hidden mb-8 sticky top-0 left-0 z-[1000] backdrop-blur-sm p-4 mx-auto sm:px-2 md:px-48 w-full',
          isFullScreen && 'hidden',
        )}
      >
        <nav
          className={clsx(
            'ml-auto text-sm font-medium space-x-6 flex flex-row',
          )}
        >
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="flex items-center space-x-2 duration-300 transition"
            >
              {React.cloneElement(link.icon, { className: LinkClass })}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
