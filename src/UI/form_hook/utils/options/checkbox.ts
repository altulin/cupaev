import Checkbox from "@/UI/form_hook/components/Checkbox";
import { ITextInput } from "@/UI/form_hook/utils/types";
import { requiredCheck } from "@/UI/form_hook/utils/validation/errText";

export const fieldCheckbox = (args: ITextInput) => {
  return {
    type: "checkbox",
    validation_type: "boolean",
    validations: [
      {
        type: "oneOf",
        params: [[true], requiredCheck],
      },
    ],
    component: Checkbox,
    ...args,
  };
};
