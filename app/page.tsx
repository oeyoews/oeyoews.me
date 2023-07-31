import AllArticles from "@/components/AllArticles";
import ViewCounter from "@/components/ViewCounter";
import { isDev } from "@/lib/isDev";

export default async function Page() {
  return (
    <div className="m-4 sm:m-8">
      <div className="mx-auto max-w-5xl">
        <AllArticles />
        <div className="my-4 text-center text-sm text-gray-500">{!isDev && <ViewCounter slug="home" />}</div>
      </div>
    </div>
  );
}
