import { create } from 'zustand';

interface StoreState {
  loadedItems: number;
  enteredPassword: string;
  showContent: boolean;
  isPlaying: boolean;
  isClient: boolean;
}

interface StoreActions {
  setLoadedItems: (loadedItems: number) => void;
  setPassword: (password: string) => void;
  setShowContent: (show: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

type UseStore = StoreState & StoreActions;

const useStore = create<UseStore>()((set) => ({
  loadedItems: 30,
  enteredPassword: '',
  isPlaying: false,
  showContent: false,
  isClient: false,
  setLoadedItems: (loadedItems) => set({ loadedItems }),
  setPassword: (password) => set({ enteredPassword: password }),
  setShowContent: (show) => set({ showContent: show }),
  setIsPlaying: (isPlaying) => set({ isPlaying: isPlaying }),
}));

export default useStore;
