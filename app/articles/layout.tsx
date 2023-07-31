import ArticleInfo from "components/ArticleInfo";
import { headers } from "next/headers";
import Image from "next/image";
import { getArticleBySlug } from "utils/getArticles";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const slug = headers().get("x-next-article-slug") as string;
  const article = await getArticleBySlug(slug);
  const { metadata } = article;
  const image = metadata?.image;

  return (
    <article className="prose mx-auto p-4 lg:prose-xl">
      {
        <div className="flex max-h-[60vh] justify-center">
          <Image
            className="rounded-md"
            src={image || "/image.png"}
            width={metadata?.image ? undefined : 1080}
            height={metadata?.image ? undefined : 960}
            alt={String(metadata?.title)}
          />
        </div>
      }
      <ArticleInfo article={article} className="-mt-8 mb-4 px-1 text-sm" />
      {children}
    </article>
  );
}
