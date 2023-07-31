import { kv } from "@vercel/kv";
import { FiEye } from "react-icons/fi";

async function ViewCounter({ slug }) {
  const views = await kv.incr(slug);
  const test = await kv.get(slug);

  return (
    <>
      <FiEye className="inline" /> {Intl.NumberFormat("en-us").format(views)} views
    </>
  );
}

export default ViewCounter;
