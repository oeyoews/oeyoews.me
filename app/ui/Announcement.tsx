'use client';

import { useEffect } from 'react';

import { toast } from 'sonner';

export const Announcement = ({ text }: { text: string }) => {
  useEffect(() => {
    toast.info(text, {});
  }, [text]);
  return null;
};
