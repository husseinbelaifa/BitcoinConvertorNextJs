import Link from "next/link";
const Index = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a href="">Home</a>
        </Link>
        <Link href="/about">
          <a href="">About</a>
        </Link>
      </li>
    </ul>
    <h1>Welecome to Currency Convertor</h1>
  </div>
);
export default Index;
