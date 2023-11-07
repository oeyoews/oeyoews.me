'use client';

import { useEffect, useState } from 'react';

import Tiddler from '@/components/Tiddler';

import getTiddlerData from '@/lib/getTiddlerData';

export default function DemoPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [tiddler, setTiddler] = useState<Tiddler>();
  useEffect(() => {
    getTiddlerData().then((tiddlers) => {
      const tiddler = tiddlers.find((tiddler) => {
        if (tiddler.slug === slug) {
          return tiddler;
        }
      });
      // @ts-ignore
      setTiddler(tiddler);
    });
  }, [slug]);

  // @ts-ignore
  return tiddler && <Tiddler tiddler={tiddler} />;
}
