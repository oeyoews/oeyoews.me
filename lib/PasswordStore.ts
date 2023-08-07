'use client';

import { create } from 'zustand';

const usePasswordStore = create((set) => ({
  isPasswordValid: false,
  setPasswordValidation: (isValid: any) =>
    set(() => ({ isPasswordValid: isValid })),
  savePasswordToLocalStorage: (password: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('password', password);
    }
  },
  getPasswordFromLocalStorage: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('password');
    }
  },
}));

export default usePasswordStore;
