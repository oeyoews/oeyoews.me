'use client';

import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="scale-125"
        aria-label="theme switch"
      >
        {theme === 'light' ? <FiSun className="" /> : <FiMoon />}
      </button>
    </>
  );
}
