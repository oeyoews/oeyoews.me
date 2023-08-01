import { Article } from "@/types";

const importAll = (r: any): Promise<Article[]> =>
  Promise.all(
    r.keys().map(async (fileName: any) => {
      const module = r(fileName);
      const slug = fileName.substr(2).replace(/\/page\.mdx$/, "");

      return {
        slug,
        metadata: module?.metadata,
        component: module?.default,
        readingTime: module?.metadata_readingTime,
      } satisfies Article;
    })
  );

export const getAllArticles = async (): Promise<Article[]> =>
  importAll(
    // @ts-ignore
    require.context("../app/articles/", true, /^\.\/[^\/]+\/page\.mdx$/)
  );

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const module = require(`../app/articles/${slug}/page.mdx`);
  console.log(module);

  return {
    slug,
    component: module?.default,
    metadata: module?.metadata,
    readingTime: module?.metadata_readingTime,
  };
};
