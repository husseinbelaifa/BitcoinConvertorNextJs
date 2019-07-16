import Link from "next/link";
const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a href="">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a href="">About</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
