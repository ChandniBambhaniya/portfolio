import React from "react";
import styles from "./experience.module.css";
import htmlIcon from "../../../assets/skills/html.png";
import cssIcon from "../../../assets/skills/css3.png";
import jsIcon from "../../../assets/skills/java-script.png";
import reactIcon from "../../../assets/skills/react.png";
import nodeIcon from "../../../assets/skills/js.png";
import mongoIcon from "../../../assets/skills/mongo.png";
import mysqlIcon from "../../../assets/skills/mysql.png";
import figmaIcon from "../../../assets/skills/figma.png";
import pythonIcon from "../../../assets/skills/python.png";
import typescriptIcon from "../../../assets/skills/typescript.png";
import codeSymphonyLogo from "../../../assets/skills/companies/code_symphony_logo.jpg";
import exglomaLogo from "../../../assets/skills/companies/exgloma_logo.jpg";

export const Experience = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.titleText}>Experience</h2>
      </div>

      <div className={styles.contentFrame}>
        <div className={styles.languageIconsGrid}>
          <div className={styles.languageIcons}>
            <img src={htmlIcon} alt="html-img" />
            <p>HTML</p>
          </div>
          <div className={styles.languageIcons}>
            <img src={cssIcon} alt="css-img" />
            <p>CSS</p>
          </div>
          <div className={styles.languageIcons}>
            <img src={jsIcon} alt="java-script-img" />
            <p>Java Script</p>
          </div>
          <div className={styles.languageIcons}>
            <img src={nodeIcon} alt="js-img" />
            <p>Node JS</p>
          </div>
          <div className={styles.languageIcons}>
            <img src={reactIcon} alt="react-img" />
            <p>React Js</p>
          </div>
          <div className={styles.languageIcons}>
            <img src={mongoIcon} alt="mongo-img" />
            <p>MongoDB</p>
          </div>
          <div className={styles.languageIcons}>
            <img src={mysqlIcon} alt="mysql-img" />
            <p>MYSQL</p>
          </div>
          <div className={styles.languageIcons}>
            <img src={typescriptIcon} alt="typescript-img" />
            <p>Type Script</p>
          </div>
          <div className={styles.languageIcons}>
            <img src={pythonIcon} alt="python-img" />
            <p>Python</p>
          </div>
        </div>

        <div className={styles.companyDetails}>
            <div className={styles.companyDetailsBox}>
                <div className={styles.companyLogoBox}>
                    <img src={codeSymphonyLogo} alt="company-logo" className={styles.companyLogo}/>
                </div>
                <div>
                    <h2>Code Symphony</h2>
                    <h4>June 2020 - Dec 2023</h4>
                    <ui>
                        <li>Worked on multiple projects using React, RReact Native, Node.js, Mysql, MongoDB, etc.</li>
                        <li>Developed RESTful APIs and integrated them with front-end applications.</li>
                        <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
                        <li>Implemented responsive design principles to ensure optimal user experience.</li>
                    </ui>
                </div>
            </div>

            <div className={styles.companyDetailsBox}>
                <div className={styles.companyLogoBox}>
                    <img src={exglomaLogo} alt="company-logo" className={styles.companyLogo}/>
                </div>
                <div>
                    <h2>Exgloma</h2>
                    <h4>Jan 2024 - Present</h4>
                    <ui>
                        <li>Worked on multiple projects using React, Node.js, and MongoDB.</li>
                        <li>Developed strong Backend, RESTful APIs and integrated them with front-end applications.</li>
                        <li>Participated in code reviews and contributed to team knowledge sharing.</li>
                        <li>Implemented responsive design principles to ensure optimal user experience.</li>
                    </ui>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
