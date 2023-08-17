import { create } from 'zustand';

const usePasswordStore = create((set) => ({
  enteredPassword: '',
  showContent: false,
  setPassword: (password: string) => set({ enteredPassword: password }),
  setShowContent: (show: boolean) => set({ showContent: show }),
}));

export default usePasswordStore;
