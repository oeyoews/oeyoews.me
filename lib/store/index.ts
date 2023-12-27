import { createSelectors } from './createSelectors';

import { create } from 'zustand';

interface StoreState {
  loadedItems: number;
  enteredPassword: string;
  showContent: boolean;
}

interface StoreActions {
  incrementLoadedItems: (steps?: number) => void;
  setPassword: (password: StoreState['enteredPassword']) => void;
  setShowContent: (showContent: StoreState['showContent']) => void;
}

type UseStore = StoreState & StoreActions;

const useBlogStoreBase = create<UseStore>()((set, get) => ({
  loadedItems: 10,
  enteredPassword: '',
  showContent: false,

  incrementLoadedItems: (steps = 10) =>
    set({ loadedItems: get().loadedItems + steps }),
  setPassword: (enteredPassword) => set({ enteredPassword }),
  setShowContent: (showContent) => set({ showContent })
}));

const useBlogStore = createSelectors(useBlogStoreBase);

export default useBlogStore;
