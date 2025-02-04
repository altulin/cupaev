import PasswordField from "@/UI/form_hook/components/password/PasswordField";
import { ITextInput } from "@/UI/form_hook/utils/types";
import {
  confirmPasswordMatch,
  passwordMax,
  passwordMin,
  required,
} from "@/UI/form_hook/utils/validation/errText";
import * as yup from "yup";

export const fieldPassword = (args: ITextInput) => {
  return {
    type: "password",
    autoComplete: "off",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "min",
        params: [8, passwordMin],
      },
      {
        type: "max",
        params: [14, passwordMax],
      },
    ],
    component: PasswordField,
    ...args,
  };
};

export const fieldConfirmPassword = (args: ITextInput) => {
  return {
    type: "password",
    autoComplete: "off",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "oneOf",
        params: [[yup.ref("password")], confirmPasswordMatch],
      },
    ],
    component: PasswordField,
    ...args,
  };
};
