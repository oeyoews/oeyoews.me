"use client";

import { Suspense, useEffect, useState } from "react";

function Hitokoto() {
  const [hitokotoText, setHitokotoText] = useState("");

  async function fetchHitokotoText() {
    const response = await fetch("https://v1.hitokoto.cn");
    const { hitokoto: hitokotoText } = await response.json();
    setHitokotoText(hitokotoText);
  }

  useEffect(() => {
    fetchHitokotoText();
  }, []);

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <div
        className="mt-8 select-none rounded-sm bg-gradient-to-r from-red-300 via-purple-400 to-blue-500 bg-clip-text p-1 text-center text-sm text-transparent hover:cursor-pointer"
        title="点击刷新一言"
        onClick={fetchHitokotoText}
      >
        {hitokotoText}
      </div>
    </Suspense>
  );
}

export default Hitokoto;
