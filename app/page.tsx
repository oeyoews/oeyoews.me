import AllArticles from '@/components/AllArticles';
import ViewCounter from '@/components/ViewCounter';

export default async function Page() {
  return (
    <div className="m-4 sm:m-8">
      <div className="mx-auto max-w-xl">
        <AllArticles />
        <div className="my-4 text-sm text-center text-gray-400">
          <ViewCounter slug="home" />
        </div>
      </div>
    </div>
  );
}
