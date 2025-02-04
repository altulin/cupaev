import { ITextInput } from "@/UI/form_hook/utils/types";
import { required, valid } from "@/UI/form_hook/utils/validation/errText";

export const fieldEmail = (args: ITextInput) => {
  return {
    type: "email",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "matches",
        params: [/@[^.]*\./, valid],
      },
      {
        type: "email",
        params: [valid],
      },
    ],
    ...args,
  };
};
