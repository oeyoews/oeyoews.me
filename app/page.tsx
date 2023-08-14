import AllArticles from '@/components/AllArticles';
import ViewCounter from '@/components/ViewCounter';

export default function Page() {
  return (
    <div className="m-4 sm:m-8">
      <div className="mx-auto max-w-xl">
        <AllArticles />
        <div className="my-4 text-sm text-center text-gray-400">
          <ViewCounter slug="home" />
          {/* 由于文章不是静态生成, 所以当前路由 是ssr, buildtime 总是会刷新 */}
          {/* <div className="my-1">
            <RiTimeLine className="inline stroke-0 fill-blue-300" />{' '}
            {new Date().toLocaleString()}
          </div> */}
          <small className="my-1">当前所有文章暂未经过整理 </small>
        </div>
      </div>
    </div>
  );
}
