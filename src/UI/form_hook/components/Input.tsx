import clsx from "clsx";
import { FC } from "react";
import { ITextInput } from "@/UI/form_hook/utils/types";
import style from "@/UI/form_hook/Form.module.scss";
import { useFormContext } from "react-hook-form";
import useGetFieldData from "@/UI/form_hook/hook/fieldData";

const Input: FC<ITextInput> = ({ modifier, ...props }) => {
  const { register } = useFormContext();
  const { isError } = useGetFieldData(props.name);

  return (
    <input
      className={clsx(
        style.input,
        modifier && style[`input--${modifier}`],
        isError && style[`input--error`],
      )}
      id={props.id}
      {...props}
      {...register(props.name)}
    />
  );
};
export default Input;
