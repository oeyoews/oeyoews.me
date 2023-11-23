'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export const Announcement = ({ text }: { text: string }) => {
  useEffect(() => {
    toast(text, {});
  }, [text]);
  return null;
};
