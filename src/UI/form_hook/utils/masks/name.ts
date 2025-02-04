/* eslint-disable no-useless-escape */
const isLetter = (value: string) => {
  return /^[А-Яа-яЁёa-zA-Z\-]+$/g.test(value);
};

export const onNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const input = e.target;

  const inputLength = Number(`${input.value.length}`);
  const lastEl = input.value.slice(-1);

  if (!isLetter(lastEl)) {
    if (inputLength === 1) {
      return (input.value = "");
    } else {
      return (input.value = input.value.replace(/.$/, ""));
    }
  }

  if (inputLength === 1 && input.value === "-") {
    return (input.value = "");
  }

  if (inputLength > 1) {
    if (input.value.split("").filter((i) => i === "-").length > 1) {
      input.value = input.value.replace(/.$/, "");
    } else {
      return input.value;
    }
  }
};
