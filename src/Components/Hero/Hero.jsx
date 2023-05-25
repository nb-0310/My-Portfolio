import Avatar from "./Avatar";
import styles from "./hero.module.scss";
import Reveal from "../../Utils/Reveal";

const Hero = () => {
    return (
        <section id="hero" className={`section-wrapper ${styles.hero}`}>
            <div className={styles.copyWrapper}>
                <Reveal>
                    <h1 className={styles.title}>
                        Hey, I&apos;m Nirzar<span>.</span>
                    </h1>
                </Reveal>
                <Reveal>
                    <h2 className={styles.subTitle}>
                        I&apos;m a <span>Frontend Developer</span>
                    </h2>
                </Reveal>
                <Reveal>
                    <p className={styles.aboutCopy}>
                        I craft seamless digital interfaces and interactions through elegant code and captivating design, I bring your ideas to life as a front-end developer. Let&apos;s connect!
                    </p>
                </Reveal>
                <Reveal>
                    {/* <StandardButton */}
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView()}
                    >
                        Contact me
                    </button>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero