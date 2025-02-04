import File from "@/UI/form_hook/components/File";
import { ITextInput } from "@/UI/form_hook/utils/types";
import { required } from "@/UI/form_hook/utils/validation/errText";

export const fieldFile = (args: ITextInput) => {
  return {
    type: "file",
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
    ],

    component: File,
    ...args,
  };
};
