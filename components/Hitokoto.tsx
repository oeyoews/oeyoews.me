import { Suspense, use } from 'react';

function Hitokoto() {
  const response = use(
    fetch('https://v1.hitokoto.cn', {
      cache: 'no-store',
    }),
  );

  const { hitokoto: hitokotoText } = use(response.json());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className="mt-8 select-none rounded-sm bg-gradient-to-r from-red-300 via-purple-400 to-blue-500 bg-clip-text p-1 text-center text-sm text-transparent hover:cursor-pointer"
        title="点击刷新一言"
      >
        {hitokotoText}
      </div>
    </Suspense>
  );
}

export default Hitokoto;
