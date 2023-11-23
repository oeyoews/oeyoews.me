import { create } from 'zustand';

type PasswordStoreState = {
  loadedItems: number;
  enteredPassword: string;
  showContent: boolean;
  isPlaying: boolean;
  isClient: boolean;
};

type PasswordStoreActions = {
  setLoadedItems: (loadedItems: number) => void;
  setPassword: (password: string) => void;
  setShowContent: (show: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
};

type UsePasswordStore = PasswordStoreState & PasswordStoreActions;

const useStore = create<UsePasswordStore>((set) => ({
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
