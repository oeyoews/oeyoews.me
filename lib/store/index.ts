import { createSelectors } from './createSelectors';

import { create } from 'zustand';

interface StoreState {
  enteredPassword: string;
  showContent: boolean;
}

interface StoreActions {
  setPassword: (password: StoreState['enteredPassword']) => void;
  setShowContent: (showContent: StoreState['showContent']) => void;
}

type UseStore = StoreState & StoreActions;

const useBlogStoreBase = create<UseStore>()((set) => ({
  enteredPassword: '',
  showContent: false,
  setPassword: (enteredPassword) => set({ enteredPassword }),
  setShowContent: (showContent) => set({ showContent }),
}));

const useBlogStore = createSelectors(useBlogStoreBase);

export default useBlogStore;
