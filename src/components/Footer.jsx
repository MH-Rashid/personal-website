import GHIcon from "../assets/icons/github-logo.png";
import LIIcon from "../assets/icons/linkedin-icon.png";

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={styles.social_logos}>
        <a
          href="https://github.com/MH-Rashid?tab=repositories&q=&type=public&language=&sort="
          target="_blank"
        >
          <img src={GHIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammed-rashid-a42b39134/"
          target="_blank"
        >
          <img src={LIIcon} />
        </a>
      </div>

      <p>Muhammed Rashid <span>&copy;</span>2024</p>
    </footer>
  );
}
