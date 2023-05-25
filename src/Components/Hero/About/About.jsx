import Links from "../../Navigation/Components/Links";
import SectionHeader from "../../../Utils/SectionHeader";
import styles from "./about.module.scss";
import Stats from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import Animate from "../../Utils/Animate";

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Animate>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Nirzar. I&apos;m software developer from Gujarat,
              India. I specialize in frontend, primarily React, but
              open to explore and learn whatever tools are right for the job.
            </p>
          </Animate>
          <Animate>
            <p className={styles.aboutText}>
              I graduated with a degree in Computer Science Engineering in the year 2022. Since then, i have worked with different routes of web development but ended up enjoying frontend the most.
            </p>
          </Animate>
          <Animate>
            <p className={styles.aboutText}>
              Outside of work, I love to train myself. I train multiple days a week and aspire to have a  perfectly healthy lifestyle (I try my best :)). A secret I would like to tell you, I make great coffee.
            </p>
          </Animate>
          <Animate>
            <p className={styles.aboutText}>
              I&apos;m looking for new positions where my passion can become helpful for creating great products. If you think
              you&apos;ve got an opportunity that I might like, let&apos;s connect
              🔗
            </p>
          </Animate>
          <Animate>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <Links />
            </div>
          </Animate>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default About