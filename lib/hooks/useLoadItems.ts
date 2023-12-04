import { useState } from 'react';

export function useLoadItems(steps = 15) {
  const [loadedItems, setLoadedItems] = useState(steps);

  const handleLoadMore = (totalItems: number) => {
    if (loadedItems >= totalItems) {
      console.info('没有更多了');
    } else {
      setLoadedItems((prevLoadedItems) => prevLoadedItems + steps);
    }
  };

  return {
    loadedItems,
    handleLoadMore,
  };
}
