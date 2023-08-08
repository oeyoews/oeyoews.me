'use client';

import { ReactNode, useEffect, useRef } from 'react';

import { defaultOptions } from './options';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function Fancybox(props: {
  children: ReactNode;
  options?: any;
  delegate?: string;
}) {
  const containerRef = useRef(null);

  // no dependencies ???
  useEffect(() => {
    // console.log('🐞 跑两次');
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || defaultOptions;

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
