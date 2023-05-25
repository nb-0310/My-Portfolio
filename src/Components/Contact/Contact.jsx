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
            or{" "}
            <a href="https://www.twitter.com" target="_blank" rel="nofollow">
              Twitter
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
      </div>
    </section>
  );
};

export default Contact