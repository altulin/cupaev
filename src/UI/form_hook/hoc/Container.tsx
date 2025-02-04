import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";
import style from "@/UI/form_hook/Form.module.scss";
import useGetFieldData from "@/UI/form_hook/hook/fieldData";

interface IContainer extends InputHTMLAttributes<HTMLInputElement> {
  label_text?: string;
  modifier?: string | null;
}

const Container: FC<IContainer> = ({ ...props }) => {
  const { children, modifier = null } = props;
  const { isError, error_text } = useGetFieldData(props.name!);

  return (
    <div
      className={clsx(
        style.container,
        modifier && style[`container--${modifier}`],
      )}
    >
      {children}

      {isError && (
        <div
          className={clsx(style.error, modifier && style[`error--${modifier}`])}
        >
          <span
            className={clsx(
              style.error__text,
              isError && style["error__text--active"],
              modifier && style[`error__text--${modifier}`],
            )}
          >
            {typeof error_text === "string" ? error_text : null}
          </span>
        </div>
      )}
    </div>
  );
};
export default Container;
