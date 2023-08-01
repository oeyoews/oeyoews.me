async function Hitokoto() {
  const response = await fetch("https://v1.hitokoto.cn", {
    cache: "no-store",
  });
  const { hitokoto: hitokotoText } = await response.json();

  return (
    <div
      className="mt-8 select-none rounded-sm bg-gradient-to-r from-red-300 via-purple-400 to-blue-500 bg-clip-text p-1 text-center text-sm text-transparent hover:cursor-pointer"
      title="点击刷新一言"
    >
      {hitokotoText}
    </div>
  );
}

export default Hitokoto;
