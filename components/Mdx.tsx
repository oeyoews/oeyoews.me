import React, { ReactNode } from 'react';
import md5 from 'md5';
import {
  GoLightBulb,
  GoAlert,
  GoInfo,
  GoStop,
  GoDiscussionClosed
} from 'react-icons/go';

import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

import Projects from './Projects';

import { Code } from 'bright';
import Icon from '~components/Icon';

Code.lineNumbers = false;
// TODO: not support prefers-color-scheme
Code.theme = {
  dark: 'one-dark-pro',
  light: 'github-light'
};

type bqtypes = 'tip' | 'warning' | 'note' | 'causion' | 'important';

const calloutTypes: Record<bqtypes, { icon: any; className?: string }> = {
  tip: { icon: <GoLightBulb />, className: 'fill-green-500' },
  warning: { icon: <GoAlert />, className: 'fill-yellow-400' },
  note: { icon: <GoInfo />, className: 'fill-sky-400' },
  causion: { icon: <GoStop />, className: 'fill-red-400' },
  important: {
    icon: <GoDiscussionClosed />,
    className: 'fill-purple-400'
  }
};

const Callout = ({
  children,
  type
}: {
  children: React.ReactNode;
  type: bqtypes;
}) => {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 my-8">
      <div className="flex items-center w-4 mr-4">
        {React.cloneElement(calloutTypes[type].icon, {
          className: calloutTypes[type].className + ' size-5'
        })}
      </div>
      <div className="w-full callout">{children}</div>
    </div>
  );
};

const createHeading =
  (level: number) =>
  // eslint-disable-next-line react/display-name
  ({ children }: any) => {
    let slug = md5(children).slice(0, 9);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor'
        })
      ],
      children
    );
  };

const CustomLink = (props: any) => {
  let href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Pre = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLPreElement
>) => {
  return (
    <Code {...props} className="not-prose">
      {children}
    </Code>
  );
};

const TwPlugin = ({
  name,
  author = 'oeyoews'
}: {
  name: string;
  author: string;
}) => {
  const plugin = `$:/plugins/${author}/${name}`;
  return (
    <a
      href={`https://tiddlywiki-starter-kit.vercel.app/#${encodeURIComponent(
        plugin
      )}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  Icon,
  pre: Pre,
  Projects,
  TwPlugin,
  Callout
};

const MDX = ({ source }: { source: any }) => {
  // @ts-ignore
  return <MDXRemote components={components} source={source} />;
};

export default MDX;
