import { create } from 'zustand';

interface StoreState {
  loadedItems: number;
  enteredPassword: string;
  showContent: boolean;
}

interface StoreActions {
  setLoadedItems: (loadedItems: number) => void;
  setPassword: (password: string) => void;
  setShowContent: (show: boolean) => void;
}

type UseStore = StoreState & StoreActions;

const useStore = create<UseStore>()((set) => ({
  loadedItems: 30,
  enteredPassword: '',
  showContent: false,
  setLoadedItems: (loadedItems) => set({ loadedItems }),
  setPassword: (enteredPassword) => set({ enteredPassword }),
  setShowContent: (show) => set({ showContent: show }),
}));

export default useStore;
