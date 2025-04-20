import React,{useState} from "react";
import styles from "./navbar.module.css";
import {getImageURL} from "../../utils";
import menuIcon from "../../../assets/nav/menuOpen.png";
import menuCloseIcon from "../../../assets/nav/menuClose.png";
export const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Close the menu
    setMenuOpen(false);
    
    // Find the target element
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Update URL without triggering default scroll behavior
      window.history.pushState(null, "", `#${targetId}`);
      
      // Manually scroll to the element
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={isMenuOpen? menuCloseIcon : menuIcon } alt="menu-button"  onClick={() => setMenuOpen(!isMenuOpen)} />
        <ul className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`} >
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          </li>
          <li> 
            <a href="#experience" onClick={(e) => handleNavClick(e, "experience")}>Experience</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact1" onClick={(e) => handleNavClick(e, "contact1")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
