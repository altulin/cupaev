import MyDatePicker from "@/UI/form_hook/components/Datepicker";
import { ITextInput } from "@/UI/form_hook/utils/types";
import { required } from "@/UI/form_hook/utils/validation/errText";

export const fieldDatePicker = (args: ITextInput) => {
  return {
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
    ...args,
    component: MyDatePicker,
  };
};
