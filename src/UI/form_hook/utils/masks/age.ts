/* eslint-disable no-useless-escape */
const isNumber = (value) => {
  return /^[\.\d]+$/g.test(value);
};

export const onAgeInput = (e) => {
  const input = e.target;

  const inputLength = Number(`${input.value.length}`);
  const lastEl = input.value.slice(-1);

  if (!isNumber(lastEl)) {
    return (input.value = input.value.replace(/.$/, ""));
  }

  if (inputLength === 1) {
    if (["1", "2", "3", "0"].includes(lastEl)) {
      return input.value;
    } else {
      return (input.value = "");
    }
  }

  if (inputLength === 2) {
    const first = input.value.split("")[0];

    if (lastEl === ".") {
      return (input.value = input.value.replace(/.$/, ""));
    }

    if (first === "3") {
      if (["1", "0"].includes(lastEl)) {
        return (input.value = `${input.value}.`);
      } else {
        return (input.value = input.value.replace(/.$/, ""));
      }
    } else {
      return (input.value = `${input.value}.`);
    }
  }

  if (inputLength === 4) {
    if (["1", "0"].includes(lastEl)) {
      return input.value;
    } else {
      return (input.value = input.value.replace(/.$/, ""));
    }
  }

  if (inputLength === 5) {
    const fourth = input.value.split("")[3];

    if (lastEl === ".") {
      return (input.value = input.value.replace(/.$/, ""));
    }

    if (fourth === "0") {
      return (input.value = `${input.value}.`);
    }

    if (fourth === "1") {
      if (["1", "2", "0"].includes(lastEl)) {
        return (input.value = `${input.value}.`);
      } else {
        return (input.value = input.value.replace(/.$/, ""));
      }
    }
  }
  if (inputLength === 7) {
    if (["1", "2"].includes(lastEl)) {
      return (input.value = `${input.value}`);
    } else {
      return (input.value = input.value.replace(/.$/, ""));
    }
  }

  if (inputLength === 8) {
    const marker = input.value.split("")[6];

    if (lastEl === ".") {
      return (input.value = input.value.replace(/.$/, ""));
    }

    if (marker === "1") {
      if (["9"].includes(lastEl)) {
        return (input.value = `${input.value}`);
      } else {
        return (input.value = input.value.replace(/.$/, ""));
      }
    }

    if (marker === "2") {
      if (["0"].includes(lastEl)) {
        return (input.value = `${input.value}`);
      } else {
        return (input.value = input.value.replace(/.$/, ""));
      }
    }
  }

  if (inputLength === 9) {
    if (lastEl === ".") {
      return (input.value = input.value.replace(/.$/, ""));
    }
  }

  if (inputLength === 10) {
    if (lastEl === ".") {
      return (input.value = input.value.replace(/.$/, ""));
    }
  }
  if (inputLength > 10) {
    return (input.value = input.value.replace(/.$/, ""));
  }
};
