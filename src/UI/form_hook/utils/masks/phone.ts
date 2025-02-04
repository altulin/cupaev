const prefixNumber = (str: string) => {
  // let result;

  // switch (str) {
  //   case "7":
  //     result = "7 (";
  //     break;
  //   case "8":
  //     result = "8 (";
  //     break;
  //   case "9":
  //     result = "7 (9";
  //     break;

  //   default:
  //     result = "7 (";
  // }
  // return result;

  return str === "9" ? "7 (9" : "7 (";
};

export const onPhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const input = e.target;
  const value = input.value.replace(/\D+/g, "");
  const numberLength = 11;
  let result;

  if (input.value.includes("+8") || input.value[0] === "8") {
    result = "";
  } else {
    result = "+";
  }

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i]);
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }

  input.value = result;
};
