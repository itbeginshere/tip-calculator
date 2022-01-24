import styles from "../styles/CalculatedDisplay.module.scss";

export default function CalculatedDisplay({
  title,
  total,
}: {
  title: string;
  total: number;
}) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.unit}>/ person</div>
      </div>
      <div className={styles.total}>${total.toFixed(2)}</div>
    </div>
  );
}
