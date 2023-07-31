import Link from "next/link";
import { FiHome } from "react-icons/fi";

function NavBar() {
  return (
    <div className="mx-auto flex max-w-5xl justify-end space-x-2 p-2">
      <Link href="/">
        <FiHome className="inline transform text-xl transition duration-200 hover:scale-125" />
      </Link>
    </div>
  );
}

export default NavBar;
