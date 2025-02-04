import TextArea from "@/UI/form_hook/components/TextArea";
import { ITextInput } from "@/UI/form_hook/utils/types";
import { required } from "@/UI/form_hook/utils/validation/errText";

export const fieldTextArea = (args: ITextInput) => {
  return {
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "max",
        params: [50, "Не более 50 символов"],
      },
    ],
    component: TextArea,
    ...args,
  };
};
