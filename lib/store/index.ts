import { create } from 'zustand';

type PasswordStoreState = {
  enteredPassword: string;
  showContent: boolean;
};

type PasswordStoreActions = {
  setPassword: (password: string) => void;
  setShowContent: (show: boolean) => void;
};

type UsePasswordStore = PasswordStoreState & PasswordStoreActions;

const usePasswordStore = create<UsePasswordStore>((set) => ({
  enteredPassword: '',
  showContent: false,
  setPassword: (password) => set({ enteredPassword: password }),
  setShowContent: (show) => set({ showContent: show }),
}));

export default usePasswordStore;
