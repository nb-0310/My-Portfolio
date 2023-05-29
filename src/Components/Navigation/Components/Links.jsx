import styles from "./links.module.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Links = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <a href="https://www.linkedin.com/in/nirzar-bhatt-30a644214/" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem" />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a href="https://github.com/nb-0310" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </a>
      </motion.span>
    </div>
  );
};

export default Links