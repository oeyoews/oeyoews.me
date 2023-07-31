import { Article } from "types/article";

export default function ArticleInfo({
  article: { metadata, readingTime, views },
  className,
}: {
  article: Article;
  className?: string;
}) {
  const author = Array.isArray(metadata?.authors) ? metadata?.authors.join(", ") : metadata?.authors || "oeyoews";

  return (
    <div className={"flex w-full justify-between " + className}>
      <div className="flex">
        <span className="mr-2">{metadata?.date}</span>
        <span className="ml-2">{readingTime}</span>
      </div>
      <span>by {String(author)}</span>
    </div>
  );
}
