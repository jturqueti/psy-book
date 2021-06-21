import styles from "../styles/Layout.module.css";
import { useState } from "react";

import Link from "next/link";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={styles.navlogo}>[BrandLogo]</a>
          </Link>

          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/">
                <a className={styles.navlink}>Home</a>
              </Link>
            </li>
            <li className={styles.navitem}>
            <Link href="/projection">
              <a className={styles.navlink}>Projection</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/livre">
                <a className={styles.navlink}>Livre</a>
              </Link>
            </li>
            <li className={styles.navitem}>
            <Link href="/contact">
              <a className={styles.navlink}>Contact</a>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
      {children}
    </>
  );
}
