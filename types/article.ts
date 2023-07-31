import { Metadata } from "next";

export type Article = {
  views: number;
  slug: string;
  metadata: Metadata & {
    slug: string;
    date?: string;
    image?: string;
  };
  component: any;
  readingTime: string;
};
