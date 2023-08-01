async function Hitokoto() {
  let hitokotoTexts;
  try {
    const response = await fetch("https://v1.hitokoto.cn", {
      cache: "no-store",
      // next: {
      //   revalidate: 1,
      // },
    });
    if (response.statusText === "OK") {
      const { hitokoto: hitokotoText } = await response.json();
      hitokotoTexts = hitokotoText;
    } else {
      throw new Error();
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("没有网络连接 \n", error);
    } else {
      console.log("发生错误:", error);
    }
  }

  return (
    <div
      className="mt-8 select-none rounded-sm bg-gradient-to-r from-red-300 via-purple-400 to-blue-500 bg-clip-text p-1 text-center text-sm text-transparent hover:cursor-pointer"
      title="点击刷新一言"
    >
      {hitokotoTexts}
    </div>
  );
}

export default Hitokoto;
