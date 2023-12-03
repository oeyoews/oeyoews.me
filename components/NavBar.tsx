'use client';

import React from 'react';
import { Button, Link, Menu, Navbar } from 'react-daisyui';

import { usePathname } from 'next/navigation';

import config from '~site/config';

export default function NavBar() {
  const pathname = usePathname();
  const summary = config.links.map((link) => {
    if (pathname.startsWith(link.path)) {
      return (
        <div key={link.title}>
          {React.cloneElement(link.icon, { className: 'w-3 h-3 mr-1' })}
          {link.title}
        </div>
      );
    }
  });

  return (
    <Navbar className="sticky top0 backdrop-blur-md bg-base-100">
      <div className="flex-1">
        <Button tag="a" color="ghost" href="/" className="normal-case text-xl">
          {config.title}
        </Button>
      </div>
      <div className="flex-none">
        <Menu horizontal={true} className="px-1">
          <Menu.Item>
            <details>
              <summary className="capitalize font-bold">{summary}</summary>
              <ul className="p-2 bg-base-100">
                {config.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.path}
                      className="flex items-center space-x-2 duration-300 transition capitalize"
                      aria-label={link.title}
                    >
                      {React.cloneElement(link.icon, { className: 'w-3 h-3' })}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </Menu.Item>
        </Menu>
      </div>
    </Navbar>
  );
}
