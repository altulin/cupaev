/* eslint-disable no-useless-escape */
import { onPhoneInput } from "@/UI/form_hook/utils/masks/phone";
import { ITextInput } from "@/UI/form_hook/utils/types";
import { required, valid } from "@/UI/form_hook/utils/validation/errText";

export const fieldPhone = (args: ITextInput) => {
  return {
    type: "tel",
    onInput: onPhoneInput,
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "matches",
        params: [/^(\+7|8) \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/gm, valid],
      },
    ],
    ...args,
  };
};
