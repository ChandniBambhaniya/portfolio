import React from "react";
import styles from "./about.module.css";
import heroImg from "../../../assets/hero/heroImg2.png";
export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About</h1>

        <div className={styles.contentFrame}>
          <div className={styles.imageContainer}>
            <img src={heroImg} alt="hero-image" className={styles.heroImg} />
          </div>

          <div className={styles.detailsBox}>
            <div className={styles.textContainer}>
              <h3 className={styles.subTitle}>
                Hello, I'm Chandni Sorathiya, I'm a Full Stack Developer with
                over 4 years of experience crafting responsive websites and
                mobile applications using React, React Native, and Node.js. 
                {/* My journey began in
                college, where I built small projects that soon transformed into
                live applications. Today, I am dedicated to crafting innovative
                digital solutions that blend creativity and cutting-edge
                technology for web and mobile. */}
              </h3>
            </div>

            <div className={styles.textContainer}>
              <h3 className={styles.subTitle}>
                In addition to my frontend expertise, I specialize in backend
                development using Node.js and Express.js. I have a strong
                foundation in database management with MongoDB, enabling me to
                create robust and scalable applications.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
