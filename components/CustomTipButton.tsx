import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCustom } from "../redux/calculatorSlice";
import { RootState } from "../redux/store";
import styles from "../styles/CustomTipButton.module.scss";
import Input from "./Input";

export default function CustomTipButton() {
  const tipPercentage: number = useSelector(
    (state: RootState) => state.calculator.tipPercentage
  );

  const customOpen: boolean = useSelector(
    (state: RootState) => state.calculator.customOpen
  );

  const dispatch = useDispatch();

  return (
    <>
      {!customOpen && (
        <button
          className={styles.button}
          onClick={() => dispatch(openCustom())}
        >
          Custom
        </button>
      )}
      {customOpen && (
        <Input maxlength={3} name={"Tip Percentage"} value={tipPercentage} />
      )}
    </>
  );
}
