import { create } from 'zustand';

type PasswordStoreState = {
  enteredPassword: string;
  showContent: boolean;
  isPlaying: boolean;
  isClient: boolean;
};

type PasswordStoreActions = {
  setPassword: (password: string) => void;
  setShowContent: (show: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
};

type UsePasswordStore = PasswordStoreState & PasswordStoreActions;

const useStore = create<UsePasswordStore>((set) => ({
  enteredPassword: '',
  isPlaying: false,
  showContent: false,
  isClient: false,
  setPassword: (password) => set({ enteredPassword: password }),
  setShowContent: (show) => set({ showContent: show }),
  setIsPlaying: (isPlaying) => set({ isPlaying: isPlaying }),
}));

export default useStore;
