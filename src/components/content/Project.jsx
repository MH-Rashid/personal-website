import styles from "./Project.module.css";

export default function Project({
  projectImg,
  projectName,
  liveLink,
  codeLink,
}) {
  return (
    <div className={styles["project-container"]}>
      <figure className={styles["image-container"]}>
        <a href={liveLink} target="_blank">
          <img src={projectImg} />
        </a>
      </figure>
      <article className={styles["project-details"]}>
        <a href={liveLink} target="_blank" style={{ textDecoration: "none" }}>
          <h3>{projectName}</h3>
        </a>
        <a className={styles.textlink} href={codeLink} target="_blank">
          <button className={styles.button}>Code</button>
        </a>
      </article>
    </div>
  );
}
