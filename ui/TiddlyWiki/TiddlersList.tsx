'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { motion } from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';
import useStore from '~lib/store';
import YearHeader from '~ui/PostList/YearHeader';
import TiddlerItem from '~ui/TiddlyWiki/TiddlerItem';

export default function TiddlersList({
  tiddlers,
}: {
  tiddlers: TiddlerMetadata[];
}) {
  const { firstLoading, loadedItems, setLoadedItems } = useStore();
  const [data, setData] = useState<TiddlerMetadata[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (tiddlers && tiddlers.length > 0) {
      setData(tiddlers);
      setHasLoaded(true);
    }
  }, [tiddlers]);

  const handleLoadMore = () => {
    if (data.length < loadedItems) {
      toast.error('没有更多了');
      return;
    }
    setLoadedItems(loadedItems + 30);
    toast.success('加载成功');
  };

  useEffect(() => {
    if (!searchTerm) {
      setData(tiddlers);
      return;
    }
    const filteredData = tiddlers.filter((tiddler) =>
      tiddler.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setData(filteredData);
  }, [searchTerm, tiddlers]);
  let currentYear: number;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const TiddlerListContent = () => (
    <motion.ol
      className="prose list-none my-4"
      variants={container}
      initial={firstLoading ? 'hidden' : 'visible'}
      animate="visible"
    >
      {data.slice(0, loadedItems).map((tiddler, index) => {
        const { title, date } = tiddler;
        const postYear = new Date(date).getFullYear();
        const yearHeader = currentYear !== postYear && (
          <YearHeader postYear={postYear} />
        );
        currentYear = postYear;

        return (
          <motion.li key={title} variants={item} className="group">
            {yearHeader}
            <TiddlerItem tiddler={tiddler} index={index} />
          </motion.li>
        );
      })}
    </motion.ol>
  );

  const handleSearch = useDebouncedCallback((value) => {
    setSearchTerm(value);
  }, 300);

  return (
    // hasLoaded && (
    <div>
      {/* <input
          className="w-full focus:ring-2 focus:ring-indigo-500 outline-indigo-400 focus:ring-opacity-50 rounded px-2 font-mono py-1"
          autoFocus={true}
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search Tiddlers (online)"
        /> */}
      <TiddlerListContent />
      {data.length > loadedItems && (
        <div className="flex justify-center items-center">
          <button onClick={handleLoadMore} className="btn">
            加载更多
          </button>
        </div>
      )}
    </div>
  );
  // );
}
