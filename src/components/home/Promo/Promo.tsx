/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import clsx from "clsx";
import style from "./Promo.module.scss";

const Promo: FC = () => {
  return <div className={clsx(style.promo, "container")}></div>;
};

export default Promo;
