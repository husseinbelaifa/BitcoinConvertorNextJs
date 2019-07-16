import Link from "next/link";
const About = () => (
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
    <h1>About Currency Convertor</h1>
    <p>Appilication to View Bitcoin prices</p>
  </div>
);
export default About;
