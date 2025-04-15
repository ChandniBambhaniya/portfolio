import React from "react";
import styles from "./hero.module.css";
import heroIcon from "../../../assets/hero/heroImg1.png";

export function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Hi, I am Chandni </h1>
          <h2 className={styles.subTitle}> I build websites and mobile apps.</h2>
          <p className={styles.discription}>
            I'm a Full stack developer specializing in building responsive
            websites and mobile apps
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
          <img
            src={heroIcon}
            alt="hero-image"
            className={styles.heroImg}
          />
        </div>

        {/* <div className={styles.topBlur} /> */}
        <div className={styles.bottumBlur} />
      </div>
    </section>
  );
}
