import styles from "./sectionheader.module.scss";
import Animate from "./Animate";

const SectionHeader = ({ title, dir = "r" }) => {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={styles.line} />
      <h3>
        <Animate>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Animate>
      </h3>
    </div>
  );
};

export default SectionHeader