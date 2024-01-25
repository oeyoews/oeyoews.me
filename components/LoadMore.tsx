'use client';

import useList from '~lib/hooks/useList';
import { useEffect } from 'react';
import { throttle } from '~lib/utils/throttle';

export default function LoadMore({ data }: { data: any[] }) {
  const { list, handleLoadItems } = useList();

  // TODO: debounce
  useEffect(() => {
    if (data.length < list) {
      return;
    }
    let rafId: number;
    // 添加滚动到底部的事件监听器
    const handleScroll = throttle(() => {
      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // 判断是否滚动到底部
        if (documentHeight - scrollTop - windowHeight < 100) {
          requestAnimationFrame(handleLoadItems);
        }
      });
    }, 100);

    // 在组件加载时添加事件监听器
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    // 在组件卸载时移除事件监听器
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
      cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  if (data.length <= list) {
    return null;
  }

  return (
    <button
      onClick={handleLoadItems}
      className="text-sm font-medium rounded px-2 font-mono py-1"
    >
      加载更多
    </button>
  );
}
