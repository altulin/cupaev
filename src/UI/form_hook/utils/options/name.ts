import { onNameInput } from "@/UI/form_hook/utils/masks/name";
import { ITextInput } from "@/UI/form_hook/utils/types";
import {
  nameMax,
  nameMin,
  required,
} from "@/UI/form_hook/utils/validation/errText";

export const fieldName = (args: ITextInput) => {
  return {
    onInput: onNameInput,
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "min",
        params: [2, nameMin],
      },
      {
        type: "max",
        params: [50, nameMax],
      },
    ],
    ...args,
  };
};
