/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITextInput_radio } from "@/UI/form_hook/utils/options/radio";
import { ITextInput } from "@/UI/form_hook/utils/types";

export const makeInitialValues = (fields: ITextInput[]) => {
  const object: Record<string, string | number | boolean | [] | any> = {};

  fields.forEach((item) => {
    const { init_value } = item;

    if (item.name === undefined) return;

    // object[item.name] = init_value || "";

    switch (item.type) {
      case "text":
        object[item.name] = init_value || "";
        break;

      case "checkbox":
        // нужно подставить в checked
        break;

      case "select":
        object[item.name] = init_value || "";
        break;

      case "radio":
        if (init_value !== undefined) {
          object[item.name] = (
            init_value as Pick<ITextInput_radio, "value">
          ).value;
        }
        break;

      default:
        object[item.name] = "";
    }
    // console.log(item);

    // console.log(init_value);

    // if (typeof init_value === "string") {
    //   console.log(init_value);
    // }

    // if (typeof item.value === "string" || typeof item.value === "number") {
    //   if (item.name !== undefined) {
    //     object[item.name] = item.value.toString();
    //   }
    //   // object[item.name] = item.value;
    // } else if (item.name !== undefined) {
    //   object[item.name] = "";
    // }
  });

  // console.log(object);

  return object;
};
