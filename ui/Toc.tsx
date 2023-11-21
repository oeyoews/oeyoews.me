'use client';

import React, { useEffect, useState } from 'react';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    // @ts-ignore
    const newHeadings = Array.from(headingElements).map(
      ({ id, innerText, tagName }: any) => ({
        id,
        text: innerText,
        level: parseInt(tagName.charAt(1)),
      }),
    );
    // @ts-ignore
    setHeadings(newHeadings);
  }, []);

  return (
    <div className="toc fixed right-4 top-1/2 -translate-y-1/2">
      <h2>Table of Contents</h2>
      <ul>
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ marginLeft: `${(level - 1) * 20}px` }}>
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
