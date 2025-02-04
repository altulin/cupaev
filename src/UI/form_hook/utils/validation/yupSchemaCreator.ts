/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";
import { ITextInput, TValidations } from "@/UI/form_hook/utils/types";

export function createYupSchema(
  schema: { [key: string]: yup.AnySchema },
  config: ITextInput,
) {
  const { name, validation_type, validations = [] } = config;

  if (!validation_type) {
    return schema;
  }

  if (!(yup as any)[validation_type]) {
    throw new Error(`Invalid validation type: ${validation_type}`);
  }

  let validator = (yup as any)[validation_type]();

  validations.forEach((validation: TValidations) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });

  schema[name] = validator;

  return schema;
}

export const validateSchema = (formData: ITextInput[]) => {
  const yepSchema = formData.reduce(createYupSchema, {});

  return yup.object().shape(yepSchema);
};
