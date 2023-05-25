import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    console.log (sections)

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      <a className={styles.logo}
        href="#hero"
        onClick={() => setSelected("hero")}
      >
        NB<span>.</span>
      </a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#about"
        onClick={() => {
          setSelected("about");
        }}
        className={`${selected === "about" ? styles.selected : ""} ${styles.linkStyles}`}
      >
        ABOUT
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#projects"
        onClick={() => setSelected("projects")}
        className={`${selected === "projects" ? styles.selected : ""} ${styles.linkStyles}`}
      >
        PROJECTS
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#experience"
        onClick={() => setSelected("experience")}
        className={`${selected === "experience" ? styles.selected : ""} ${styles.linkStyles}`}
      >
        EXP.
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        onClick={() => setSelected("contact")}
        className={`${selected === "contact" ? styles.selected : ""} ${styles.linkStyles}`}
      >
        CONTACT
      </motion.a>
    </motion.nav>
  );
};

export default Sidebar