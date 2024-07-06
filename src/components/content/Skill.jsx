import styles from "./Skill.module.css";

export default function Skill({ logo, name }) {
  return (
    <div className={styles["logo-container"]}>
      <figure >
        <img src={logo} />
      </figure>
      <figcaption>{name}</figcaption>
    </div>
  );
}
