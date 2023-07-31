import ArticleInfo from "components/ArticleInfo";
import { headers } from "next/headers";
import Image from "next/image";
import { getArticleBySlug } from "utils/getArticles";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

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
      <ArticleInfo article={article} className="-mt-8 inline px-1 text-sm" />
      {children}
      <Link className="flex justify-end no-underline" href="/">
        <button className="inline transform justify-center rounded-md bg-neutral-200 px-2 py-1 transition duration-300 hover:scale-105">
          <FiArrowLeft className="inline" />
          back home
        </button>
      </Link>
    </article>
  );
}
