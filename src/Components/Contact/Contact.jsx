import Animate from "../../Utils/Animate";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Animate width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Animate>
        <Animate width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </a>{" "}
            if that&apos;s more your speed.
          </p>
        </Animate>
        <Animate width="100%">
          <a href="mailto:nirzarbhatt031093@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>nirzarbhatt031093@gmail.com</span>
            </div>
          </a>
        </Animate>
        <Animate width="100%">
            <div className={styles.contactCopy}>
              <span>BTW this portfolio was built using React, Sass and Framer Motion. You can find the project on my github :)</span>
            </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact