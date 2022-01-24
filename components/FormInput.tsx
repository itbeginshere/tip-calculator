import FormLabel from "./FormLabel";
import styles from "../styles/FormInput.module.scss";
import Input from "./Input";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function FormInput({
  image,
  label,
}: {
  label: string;
  image: string;
}) {
  let value = 0;

  const bill = useSelector((state: RootState) => state.calculator.bill);
  const people = useSelector((state: RootState) => state.calculator.people);

  if (label === "Bill") {
    value = bill;
  } else {
    value = people;
  }

  const error: boolean = value == 0;

  return (
    <div>
      <FormLabel label={label} error={error} />
      <div className={styles.inputWrapper}>
        <img src={image} width={10} />
        <Input maxlength={7} error={error} value={value} name={label} />
      </div>
    </div>
  );
}
