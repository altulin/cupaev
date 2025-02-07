import clsx from "clsx";
import { FC } from "react";
import style from "@/UI/form_hook/Form.module.scss";
import { ITextInput } from "@/UI/form_hook/utils/types";

const Label: FC<ITextInput> = ({ ...props }) => {
  const { modifier, label_text, id, children, className, ...input_props } =
    props;

  if (!input_props.name) return;

  return (
    <div
      className={clsx(
        style.label,
        modifier && style[`label--${modifier}`],
        className,
      )}
      // htmlFor={id}
    >
      {label_text && (
        <label
          htmlFor={id}
          className={clsx(
            style.label__text,
            modifier && style[`label__text--${modifier}`],
          )}
        >
          {label_text}
        </label>
      )}

      <div className={clsx(style.input__wrapper)}>{children}</div>
    </div>
  );
};
export default Label;
