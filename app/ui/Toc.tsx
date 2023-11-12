'use client';

import React, { useEffect, useState } from 'react';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const newHeadings = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.innerText,
      level: parseInt(heading.tagName.charAt(1)),
    }));
    setHeadings(newHeadings);
  }, []);

  return (
    <div className="toc fixed right-4 top-1/2 -translate-y-1/2">
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 20}px` }}
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
