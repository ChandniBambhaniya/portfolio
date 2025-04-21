import styles from "./App.module.css";
import { Hero } from "./componets/Hero/hero";
import { Navbar } from "./componets/Navbar/navbar";
import { About } from "./componets/About/about";
import { Experience } from "./componets/Experience/experience";
import { Projects } from "./componets/Projects/projects";
import { Contact } from "./componets/Contact/contact";
import { useRef } from "react";

function App() {
  // Define refs for sections
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className={styles.app}>
      {/* Pass refs to Navbar */}
      <Navbar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div style={{ scrollMarginTop: "100px" }}>
        <Hero />
      </div>

      {/* Attach refs to wrappers around each section */}
      <div ref={aboutRef} style={{ scrollMarginTop: "100px" }}>
        <About />
      </div>
      <div ref={experienceRef} style={{ scrollMarginTop: "100px" }}>
        <Experience />
      </div>
      <div ref={projectsRef} style={{ scrollMarginTop: "100px" }}>
        <Projects />
      </div>
      <div ref={contactRef} style={{ scrollMarginTop: "100px" }}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
