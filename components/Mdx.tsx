import React, { ReactNode } from 'react';

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
  // lightSelector: '[data-theme="light"]',
  // lightSelector: 'html.light',
};

const slugify = (str: string) => {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};

const createHeading =
  (level: number) =>
  // eslint-disable-next-line react/display-name
  ({ children }: any) => {
    let slug = slugify(children);
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

const MdxBlockquote = ({ children }: { children: ReactNode }) => {
  // 检查 blockquote 是否以 [!xxx] 开头
  const tipRegex = /^\[!([^]+?)\]/;

  const match = children[1].props.children[0].match(tipRegex);
  // 如果匹配成功，获取标志内容
  const tipContent = match ? match[1] : null;

  // 根据标志内容执行相应的操作
  const handleTipContent = () => {
    if (tipContent === 'TIP') {
      // 处理 TIP 情况
      return <blockquote style={{ color: '#007bff' }}>{children}</blockquote>;
    }

    // 如果有其他标志，可以继续添加相应的处理逻辑

    // 默认情况
    return <div>{children}</div>;
  };

  return (
    <blockquote
      style={{
        borderLeft: '4px solid #007bff',
        paddingLeft: '16px',
        margin: '16px 0'
      }}
    >
      {handleTipContent()}
    </blockquote>
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
  blockquote: MdxBlockquote
};

const MDX = ({ source }: { source: any }) => {
  // @ts-ignore
  return <MDXRemote components={components} source={source} />;
};

export default MDX;
