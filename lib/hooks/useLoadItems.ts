import useBlogStore from '~lib/store';

export function useLoadItems(steps = 15) {
  const loadedItems = useBlogStore.use.loadedItems();
  const incrementLoadedItems = useBlogStore.use.incrementLoadedItems();

  const handleLoadMore = (totalItems: number) => {
    if (loadedItems < totalItems) {
      incrementLoadedItems();
    }
  };

  return {
    loadedItems,
    handleLoadMore
  };
}
