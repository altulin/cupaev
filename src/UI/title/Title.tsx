import clsx from "clsx";
import { FC } from "react";
import style from "./Title.module.scss";

const Title: FC<{ label: string; className?: string }> = ({
  label,
  className,
}) => {
  return (
    <div className={clsx(style.title)}>
      <h2 className={clsx(style.title__text, className)}>{label}</h2>
    </div>
  );
};
export default Title;
