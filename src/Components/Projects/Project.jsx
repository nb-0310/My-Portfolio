import Animate from "../../Utils/Animate";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import ProjectModal from "./ProjectModal";
import styles from "./projects.module.scss";

const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
          />
        </div>
        <div className={styles.projectCopy}>
          <Animate width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />

              <a href={code} target="_blank" rel="nofollow">
                <AiFillGithub size="2.8rem" />
              </a>

              <a href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineExport size="2.8rem" />
              </a>
            </div>
          </Animate>
          <Animate>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Animate>
          <Animate>
            <p className={styles.projectDescription}>
              {description}{" "}
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Animate>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};

export default Project