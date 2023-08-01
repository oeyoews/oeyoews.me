import { getAllArticles } from "@/utils/getArticles";
import Link from "next/link";
import Image from "next/image";

export default async function AllArticles() {
  const articles = await getAllArticles();
  // TODO
  // const length = articles.length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => {
        const { metadata } = article;
        const title = String(metadata?.title || article.slug);

        return (
          <Link
            key={title}
            href={"/articles/" + article.slug}
            className="flex flex-col overflow-hidden rounded shadow-md duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Image
              className="h-48 w-full rounded-md px-2"
              src={metadata?.image || "/image.png"}
              width={metadata?.image ? undefined : 1080}
              height={metadata?.image ? undefined : 960}
              alt={title}
            />
            <div className="px-6 py-4">
              {/* <ArticleInfo article={article} className="-mt-2 mb-2 text-xs" /> */}
              <div className="mb-2 text-xl font-bold">{title}</div>
              <p className="line-clamp-3 indent-4 text-sm text-gray-500">{metadata?.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
