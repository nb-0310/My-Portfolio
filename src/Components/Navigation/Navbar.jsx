import styles from "./navbar.module.scss";
import Links from "./Components/Links";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Links />
      <button className={styles.resume} onClick={() => window.open("/overleaf resume.pdf")}>
        My resume
      </button>
    </header>
  );
};

export default Navbar