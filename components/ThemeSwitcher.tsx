'use client';

import { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
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
      <Button
        color="neutral"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label="theme switch"
      >
        {theme === 'light' ? <FiSun className="scale-125" /> : <FiMoon />}
      </Button>
    </>
  );
}
