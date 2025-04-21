import React,{useState} from "react";
import styles from "./navbar.module.css";
import menuIcon from "../../../assets/nav/menuOpen.png";
import menuCloseIcon from "../../../assets/nav/menuClose.png";

export const Navbar = ({ aboutRef, experienceRef, projectsRef, contactRef }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={isMenuOpen ? menuCloseIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        <ul className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`}>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
