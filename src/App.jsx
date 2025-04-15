import styles from "./App.module.css";
import { Hero } from "./componets/Hero/hero";
import { Navbar } from "./componets/Navbar/navbar";
import {About} from "./componets/About/about";
import { Experience } from "./componets/Experience/experience";
import { Projects } from "./componets/Projects/projects";
import { Contact } from "./componets/Contact/contact";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
