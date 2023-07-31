import { isDev } from "lib/isDev";
import { Article } from "types/article";
import ViewCounter from "./ViewCounter";

export default function ArticleInfo({
  article: { metadata, readingTime },
  className,
}: {
  article: Article;
  className?: string;
}) {
  const author = Array.isArray(metadata?.authors) ? metadata?.authors.join(", ") : metadata?.authors || "oeyoews";

  return (
    <div className={"my-2 flex w-full justify-end space-x-2 text-sm text-gray-500" + " " + className}>
      <span className="mr-2">{metadata?.date}</span>
      <span className="ml-2">{readingTime}</span>
      <span>by {String(author)}</span>
      <span className="text-sm text-gray-500">{!isDev && <ViewCounter slug={metadata?.slug} />}</span>
    </div>
  );
}
