import { getAllTiddlers, getTiddlywikiStatus } from '~lib/tiddlywiki';
import { Announcement } from '~ui/Announcement';

// TODO: 也许可以将tw作为一个工具, 不用启动浏览器实例, 但是同时可以api 进行增删改查
const description =
  '开发中: Tiddlywiki CMS: 支持新增, 预览, 编辑更新, 导出等功能. 使用Next.Js + React + Tailwindcss 编写的Tiddlywiki前后台';

export const metadata = {
  title: 'Tiddlywiki CMS',
  description,
};

export default async function Tiddlywiki() {
  if (process.env.NODE_ENV == 'production') {
    return (
      <div>
        <Announcement text={description} />
        <div className="flex space-x-2 justify-center items-center text-gray-400">
          <div>username: </div>
          <div>version: </div>
        </div>
        <h1>(暂时不支持在线访问)</h1>
        <p>{description}</p>
      </div>
    );
  }
  const tiddlywikistatus = await getTiddlywikiStatus();
  const tiddlers = await getAllTiddlers();

  return (
    <div className="prose prose-indigo max-w-4xl">
      <Announcement text={description} />
      <div className="flex space-x-2 justify-between items-center text-gray-400 capitalize">
        <div>username: {tiddlywikistatus.username}</div>
        <div>version: {tiddlywikistatus.tiddlywiki_version}</div>
        <div>共有 {tiddlers.length} 篇</div>
      </div>
      <ol>
        {tiddlers.map((tiddler) => (
          <li key={tiddler.title}>{tiddler.title}</li>
        ))}
      </ol>
    </div>
  );
}
