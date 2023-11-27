'use client';

import React, { useEffect, useState } from 'react';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

import Link from 'next/link';

import { ThemeSwitcher } from './ThemeSwitcher';

import clsx from 'clsx';
import config from '~site/config';

export default function Nav() {
  const LinkClass = 'w-5 h-5';

  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // 进入全屏
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      // 退出全屏
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'f') {
      toggleFullScreen();
    }
  };

  useEffect(() => {
    // @ts-ignore
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      // @ts-ignore
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex fixed bottom-4 right-4 space-x-4 print:hidden">
        <ThemeSwitcher />
        {/* NOTE: 手机不支持fullscreen */}
        <button
          onClick={toggleFullScreen}
          className="scale-150 hidden md:block"
        >
          {!isFullScreen ? <MdFullscreen /> : <MdFullscreenExit />}
        </button>
      </div>
      <div
        className={clsx(
          'flex items-center justify-between print:hidden mb-8 sticky top-0 left-0 z-[1000] backdrop-blur-sm p-4 mx-auto px-2 w-full',
          isFullScreen && 'hidden',
        )}
      >
        <nav
          className={clsx(
            'ml-auto text-sm font-medium space-x-6 flex flex-row',
          )}
        >
          {config.links.map((link) => (
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
