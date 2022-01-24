import { useDispatch, useSelector } from "react-redux";
import { selectedTip } from "../redux/calculatorSlice";
import { RootState } from "../redux/store";
import styles from "../styles/TipButton.module.scss";

export default function TipButton({ amount }: { amount: number }) {
  const selectedTipValue: number = useSelector(
    (state: RootState) => state.calculator.selectedTip
  );
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    dispatch(selectedTip(amount));
  };

  return (
    <button
      className={`${styles.button} ${
        selectedTipValue == amount ? styles.highlighted : ""
      }`}
      onClick={handleClick}
    >{`${amount}%`}</button>
  );
}
