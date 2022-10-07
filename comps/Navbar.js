import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/JE.png" alt="Logo" width={125} height={100} />
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/food">
        <a>Food List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
