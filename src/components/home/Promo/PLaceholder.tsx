import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";

const Placeholder: FC = () => {
  return (
    <div className={clsx(style.placeholder)}>
      <div className={clsx(style.placeholder__image)}></div>
    </div>
  );
};
export default Placeholder;
