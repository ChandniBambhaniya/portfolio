import React,{useState} from "react";
import styles from "./navbar.module.css";
import {getImageURL} from "../../utils";
import menuIcon from "../../../assets/nav/menuOpen.png";
import menuCloseIcon from "../../../assets/nav/menuClose.png";
export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={isMenuOpen? menuCloseIcon : menuIcon } alt="menu-button"  onClick={() => setMenuOpen(!isMenuOpen)} />
        <ul className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setMenuOpen(false)}> 
            <a href="#experience">Experience</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li  onClick={() => setMenuOpen(false)}>
            <a href="#contact1">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
