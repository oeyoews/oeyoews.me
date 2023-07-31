import Link from "next/link";

function NavBar() {
  return (
    <div className="mx-auto flex max-w-5xl justify-end space-x-2 p-2">
      <Link href="/">Home</Link>
    </div>
  );
}

export default NavBar;
