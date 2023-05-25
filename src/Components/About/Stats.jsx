import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import Animate from '../../Utils/Animate'

const Stats = () => {
  return (
    <div className={styles.stats}>
      <Animate>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">JavaScript</span>
            <span className="chip">React</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Sass</span>
            <span className="chip">Responsive Design</span>
            <span className="chip">Redux</span>
            <span className="chip">Figma</span>
            <span className="chip">Git</span>
            <span className="chip">GitHub</span>
            <span className="chip">PHP</span>
            <span className="chip">MySQL</span>
          </div>
        </div>
      </Animate>
    </div>
  );
};

export default Stats