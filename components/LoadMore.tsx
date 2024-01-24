'use client';

import useList from '~lib/hooks/useList';

export default function LoadMore({ data }: { data: any[] }) {
  const { list, handleLoadItems } = useList();
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
