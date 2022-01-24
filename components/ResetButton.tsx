import styles from "../styles/ResetButton.module.scss";
import { useDispatch } from "react-redux";
import React from "react";
import { reset } from "../redux/calculatorSlice";

export default function ResetButton() {
  const dispatch = useDispatch();

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(reset());
  };

  return (
    <button onClick={(e) => handleReset(e)} className={styles.button}>
      RESET
    </button>
  );
}
