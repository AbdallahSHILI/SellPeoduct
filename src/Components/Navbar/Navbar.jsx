import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { links } from "./data";
import Button from "../../elements/Button/Button";
import Logo from "../../elements/logo/logo";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
