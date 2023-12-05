import React from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

import { Code } from 'bright';
import Icon from '~components/Icon';

Code.lineNumbers = false;
// TODO: not support prefers-color-scheme
Code.theme = {
  dark: 'one-dark-pro',
  light: 'github-light',
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
          className: 'anchor',
        }),
      ],
      children,
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
};

const MDX = ({ source }: { source: any }) => {
  return <MDXRemote components={components} source={source} />;
};

export default MDX;
