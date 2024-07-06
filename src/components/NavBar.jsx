import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav>
      <div className={styles.page_links}>
        <p>
          <a className={styles.navlink} href="#intro">
            Home
          </a>
        </p>
        <p>
          <a  className={styles.navlink} href="#skills">About</a>
        </p>
        <p>
          <a  className={styles.navlink} href="#portfolio">Portfolio</a>
        </p>
        <p>
          <a  className={styles.navlink} href="#contact">Contact</a>
        </p>
      </div>
    </nav>
  );
}
