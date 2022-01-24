import React from "react";
import { useDispatch } from "react-redux";
import {
  billChanged,
  peopleChange,
  tipPercentageChange,
} from "../redux/calculatorSlice";
import styles from "../styles/Input.module.scss";

export default function Input({
  maxlength,
  error,
  value,
  name,
}: {
  maxlength: number;
  error?: boolean;
  value: number;
  name: string;
}) {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (isNaN(Number(value))) return;
    if (parseInt(value) < 0) return;

    if (name === "Bill") {
      dispatch(billChanged(Number(value)));
    } else if (name === "Number of people") {
      dispatch(peopleChange(Number(value)));
    } else {
      dispatch(tipPercentageChange(Number(value)));
    }
  };

  return (
    <input
      className={`${styles.input} ${error && styles.error}`}
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      maxLength={maxlength}
    />
  );
}
