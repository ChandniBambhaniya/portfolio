import React from "react";
import styles from "./hero.module.css";
import heroIcon from "../../../assets/hero/heroImg1.png";

export function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>Hi, I am Chandni </h2>
          <h3 className={styles.subTitle}>
            {" "}
            I build websites and mobile apps.
          </h3>
          <p className={styles.discription}>
            I bring a blend of technical expertise and creative problem-solving
            to turn innovative ideas into high-impact digital solutions. I am
            passionate about creating seamless user experiences and am always
            eager to learn and adapt to new technologies.
          </p>
          <a
            href="mailto:chandnisorathiya1358@gmail.com"
            className={styles.contactBtn}
          >
            {" "}
            Contact Me{" "}
          </a>
        </div>

        <div className={styles.imageContainer}>
          <img src={heroIcon} alt="hero-image" className={styles.heroImg} />
        </div>

        <div className={styles.topBlur} />
        <div className={styles.bottumBlur} />
      </div>
    </section>
  );
}
