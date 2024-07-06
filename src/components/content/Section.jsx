import styles from './Section.module.css';

export default function Section({ children, ...props }) {
  return <section {...props}>{children}</section>;
}
