import { getAllArticles } from "@/utils/getArticles";
import Link from "next/link";

export default async function AllArticles() {
  const articles = await getAllArticles();

  return (
    <div className="mx-auto max-w-xl text-sm">
      <h1 className="mb-4 text-2xl font-bold">My Posts</h1>
      {articles.map((article) => {
        const { metadata } = article;
        const title = String(metadata?.title || article.slug);

        return (
          <Link
            key={title}
            href={"/articles/" + article.slug}
            className="flex flex-col overflow-hidden rounded-md p-2 !text-sm duration-300 hover:bg-neutral-100"
          >
            <div className="px-4 py-2">
              <div className="my-1 text-gray-500">{metadata?.date}</div>
              {/* <ArticleInfo article={article} className="-mt-2 mb-2 text-xs" /> */}
              <div className="mb-2 text-base font-semibold">{title}</div>
              <p className="line-clamp-3 indent-4 text-sm text-gray-500">{metadata?.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
