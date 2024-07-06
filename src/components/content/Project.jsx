import styles from "./Project.module.css";

export default function Project({
  projectImg,
  projectName,
  description,
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
        <h3>{projectName}</h3>
        <a className={styles.textlink} href={codeLink} target="_blank">
          Code
        </a>
        <p>{description}</p>
      </article>
    </div>
  );
}