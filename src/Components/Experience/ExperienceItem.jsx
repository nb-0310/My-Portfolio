import Animate from "../../Utils/Animate";
import styles from "./experience.module.scss";

const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}) => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Animate>
          <span className={styles.title}>{title}</span>
        </Animate>
        <Animate>
          <span>{time}</span>
        </Animate>
      </div>

      <div className={styles.heading}>
        <Animate>
          <span className={styles.position}>{position}</span>
        </Animate>
        <Animate>
          <span>{location}</span>
        </Animate>
      </div>
      <Animate>
        <p className={styles.description}>{description}</p>
      </Animate>
      <Animate>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Animate>
    </div>
  );
};

export default ExperienceItem