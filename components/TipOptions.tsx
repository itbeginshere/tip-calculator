import FormLabel from "./FormLabel";
import TipButton from "./TipButton";
import styles from "../styles/TipOptions.module.scss";
import CustomTipButton from "./CustomTipButton";

export default function TipOptions() {
  return (
    <div className={styles.container}>
      <FormLabel label="Select Tip %" />
      <div className={styles.buttonContainer}>
        <TipButton amount={5} />
        <TipButton amount={10} />
        <TipButton amount={15} />
        <TipButton amount={25} />
        <TipButton amount={50} />
        <CustomTipButton />
      </div>
    </div>
  );
}
