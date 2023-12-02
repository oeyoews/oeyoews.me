import { createSelectors } from './createSelectors';

import { create } from 'zustand';

interface StoreState {
  loadedItems: number;
  enteredPassword: string;
  showContent: boolean;
}

interface StoreActions {
  setLoadedItems: (loadedItems: StoreState['loadedItems']) => void;
  setPassword: (password: StoreState['enteredPassword']) => void;
  setShowContent: (showContent: StoreState['showContent']) => void;
}

type UseStore = StoreState & StoreActions;

const useBlogStoreBase = create<UseStore>()((set) => ({
  loadedItems: 30,
  enteredPassword: '',
  showContent: false,
  setLoadedItems: (loadedItems) => set({ loadedItems }),
  setPassword: (enteredPassword) => set({ enteredPassword }),
  setShowContent: (showContent) => set({ showContent }),
}));

const useBlogStore = createSelectors(useBlogStoreBase);

export default useBlogStore;
