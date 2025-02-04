import clsx from "clsx";
import { FC } from "react";
import style from "./Footer.module.scss";

const Footer: FC = () => {
  return <footer className={clsx(style.footer)}></footer>;
};
export default Footer;
