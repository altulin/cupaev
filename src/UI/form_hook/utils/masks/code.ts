import { ChangeEvent } from "react";

const getInputNumbersValue = (e: ChangeEvent<HTMLInputElement>) => {
  return e.target.value.replace(/\d/g, "");
};

export const onCodeInput = (e: ChangeEvent<HTMLInputElement>) => {
  const input = e.target;
  const inputNumbersValue = getInputNumbersValue(e);

  if (inputNumbersValue) {
    return (input.value = input.value.replace(/.$/, ""));
  }
};
