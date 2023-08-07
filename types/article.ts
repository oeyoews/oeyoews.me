import { Metadata } from 'next';

export type Article = {
  slug: string;
  metadata: Metadata & {
    slug: string;
    date?: string;
    image?: string;
    password?: string;
  };
  component: any;
  readingTime: string;
};
