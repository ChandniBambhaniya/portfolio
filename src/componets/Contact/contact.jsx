import React from "react";
import styles1 from "../Experience/experience.module.css";
import styles from "./contact.module.css";
import mailImg from "../../../assets/media/mail.png";
import linkedInImg from "../../../assets/media/linkedIn.png";
import gitImg from "../../../assets/media/git.png";

export const Contact = () => {
  return (
    <section id="contact" className={[styles.container, styles1.scrollSection]}>
      <div className={styles.leftPart}>
        <h1>Your Move</h1>
        <h4>Got a vision? I'm all ears. Let's bring it to life.</h4>
      </div>

      <div className={styles.rightPart}>
        <div className={styles.mediaContainer}>
          <a href="mailto:chandnisorathiya1358@gmail.com">
            <img src={mailImg} alt="mail" className={styles.icon} />
            <h3>chandnisorathiya1358@gmail.com</h3>
          </a>
        </div>
        <div className={styles.mediaContainer}>
          <a href="https://www.linkedin.com/in/chandni-bambhaniya-0277391a7">
            <img src={linkedInImg} alt="Linkedin" className={styles.icon} />
            <h3>linkedin.com/in/chandni-bambhaniya-0277391a7</h3>
          </a>
        </div>
        <div className={styles.mediaContainer}>
          <a href="https://github.com/ChandniBambhaniya">
            <img src={gitImg} alt="git" className={styles.icon} />
            <h3>github.com/ChandniBambhaniya</h3>
          </a>
        </div>
      </div>
    </section>
  );
};
