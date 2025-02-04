/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, InputHTMLAttributes } from "react";
import { Reference } from "yup";

export enum EnumTextInput {
  label_text = "label_text",
  name = "name",
  id = "id",
  placeholder = "placeholder",
  label = "label",
  value = "value",
  modifier = "modifier",
}

export type TValidations = { type: string; params: TParams };

export type TParams = (
  | string
  | number
  | RegExp
  | Reference<unknown>[]
  | boolean[]
  | object
)[];

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  label_text?: string;
  modifier?: string | null | undefined;
  validations?: TValidations[];
  validation_type?: string;
  options?: OptionsType;
  radio_list?: TRadioItem[];
  minRows?: number;
  init_value?: string | number | boolean | { label: string; value: string };
  component?: FC<ITextInput>;
  name: string;
  // [key: string]: any;
}

type TRadioItem = {
  label: string;
  value: string;
};

export type OptionsType = { [key: string]: string | number }[];
