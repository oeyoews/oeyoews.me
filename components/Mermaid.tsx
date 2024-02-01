'use client';

import { useEffect } from 'react';
import mermaid from 'mermaid';

export async function Mermaid() {
  //   const mermaid = await import('mermaid/dist/mermaid.tiny.min.js');
  mermaid.initialize({ startOnLoad: true });
  useEffect(() => {
    mermaid.contentLoaded();
    console.log('mermaid loaded');
  }, []);
  return null;
}
