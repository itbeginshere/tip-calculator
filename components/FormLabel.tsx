import styles from "../styles/FormLabel.module.scss";

export default function FormLabel({
  label,
  error,
}: {
  label: string;
  error?: boolean;
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="input">
        {label}
      </label>
      {error && <label className={styles.error}>{`Can\'t be zero`}</label>}
    </div>
  );
}
