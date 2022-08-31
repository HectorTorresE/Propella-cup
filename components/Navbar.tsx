import Image from "next/image";
import styles from "@styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.main} aria-label="Navbar">
      <Link href="/">
        <a tabIndex={0} title="Go to the Homepage">
          <Image
            objectFit="contain"
            src="/favicon-propella.jpg"
            width={80}
            height={24}
            alt="Propella Logo"
            priority
          />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="#Objetivo">
            <a>Objetivo</a>
          </Link>
        </li>
        <li>
          <Link href="#Informacion">
            <a>Información</a>
          </Link>
        </li>
        <li>
          <Link href="#Universidades">
            <a>Universidades</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
