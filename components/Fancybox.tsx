'use client';

import React, { ReactNode, useEffect, useRef } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function Fancybox(props: {
  children: ReactNode;
  options?: any;
  delegate?: string;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || {
      Toolbar: {
        display: {
          left: ['infobar'],
          middle: [],
          right: [],
        },
        enabled: true,
      },
      Fullscreen: {
        autoStart: false,
      },
      Thumbs: {
        type: 'modern', // modern, classic
        showOnStart: false,
        key: 'o',
      },
      keyboard: {
        Delete: 'close',
        Escape: 'close',
        ['q']: 'close',
        Backspace: 'close',
        PageUp: 'next',
        PageDown: 'prev',
        ['k']: 'prev',
        ['p']: 'prev',
        ArrowUp: 'next',
        ['j']: 'next',
        ['n']: 'next',
        ArrowDown: 'prev',
        ArrowRight: 'next',
        ArrowLeft: 'prev',
      },
      Images: {
        initialSize: 'cover', // cover; fit;
      },
      Hash: true, // custom hash  https://fancyapps.com/fancybox/plugins/hash/
    };

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
