'use client';

import { ReactNode, useEffect, useRef } from 'react';

import { defaultOptions } from './options';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface FancyboxOptionsProp {
  options?: {
    Toolbar: {
      display: {
        left: string[];
        middle: never[];
        right: never[];
      };
      enabled: boolean;
    };
    Fullscreen: {
      autoStart: boolean;
    };
    Thumbs: {
      type: string;
      showOnStart: boolean;
      key: string;
    };
    keyboard: {
      Delete: string;
      Escape: string;
    }
  }
}

function Fancybox(props: {
  children: ReactNode;
  options?: FancyboxOptionsProp['options'] | {};
  delegate?: string;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || defaultOptions;

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [containerRef, props.delegate, props.options]);

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
