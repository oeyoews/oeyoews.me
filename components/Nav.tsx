'use client';

import React from 'react';
import { useEffect } from 'react';
import { Button } from 'react-daisyui';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

import Link from 'next/link';

import { useFullScreen } from '~lib/hooks/useFullScreen';

import { ThemeSwitcher } from './ThemeSwitcher';

import clsx from 'clsx';
import config from '~site/config';

export default function Nav() {
  const LinkClass = 'w-5 h-5';
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  return (
    <>
      <div className="flex fixed bottom-4 right-4 print:hidden opacity-100 hover:opacity-100 transition-all">
        <Button
          onClick={toggleFullScreen}
          className="hidden md:block btn-square"
          aria-label="fullscreen"
        >
          {!isFullScreen ? (
            <MdFullscreen size={28} />
          ) : (
            <MdFullscreenExit size={28} />
          )}
        </Button>
      </div>
      <div
        className={clsx(
          'flex items-center justify-between print:hidden mb-8 sticky top-0 left-0 z-[1000] backdrop-blur-sm p-4 mx-auto px-2 md:px-16 w-full',
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
              aria-label={link.title}
            >
              {React.cloneElement(link.icon, { className: LinkClass })}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
