import React from "react";
import styles1 from "../Experience/experience.module.css";
import styles from "./projects.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import noobstorm from "../../../assets/projects/noobstorm.png";
import bluebird from "../../../assets/projects/bluebird.png";  
import folkLog from "../../../assets/projects/folkLog2.png";

export const Projects = () => {
  const WithStyles = ({ image, headline, description }) => (
    <div className={styles.cardContent}>
      <img
        src={image}
        alt={headline}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{headline}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <section id="projects" className={styles.container}>
      <div className={styles1.title}>
        <h2 className={styles1.titleText}>Projects</h2>
      </div>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 2
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <WithStyles
            image={bluebird}
            headline="Bluebird - Language Learning App"
            description="Bluebird Languages is an interactive language learning app offering courses in over 160 languages. The platform delivers comprehensive language lessons tailored for beginners to advanced learners through audio-based tutorials, ensuring learning on the go. Bluebird Languages combines traditional vocabulary and grammar lessons with real-life conversations and interactive exercises, making language acquisition easy and accessible."
          />
          <WithStyles
            image={folkLog}
            headline="FolkLog - Bad Time Stories"
            description="FolkLog is a digital storytelling platform designed to help children reconnect with their roots through engaging bedtime stories. The app offers a collection of tales that aim to bring children everywhere back home, fostering a sense of cultural heritage and belonging. With a focus on traditional narratives, FolkLog provides an immersive experience that combines the charm of classic storytelling with modern accessibility."
          />

          <WithStyles
            image={noobstorm}
            headline="NoobStorm – Gaming Tournament Platform"
            description="NoobStorm is an online platform for organizing and participating in eSports tournaments. It provides gamers with a seamless experience to compete across multiple games, manage team rosters, and track performance. The platform supports real-time score tracking, leaderboards, and live matches, allowing users to engage in both casual and competitive gaming environments. It aims to create a comprehensive space for the gaming community, offering rewards, recognition, and a social space for players to grow their skills."
          />
        </Carousel>
      </div>
    </section>
  );
};
