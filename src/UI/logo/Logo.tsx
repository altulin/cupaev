import style from "./Logo.module.scss";
import clsx from "clsx";
import { HashLink } from "react-router-hash-link";
// import IconLogo from "@/images/header/logo.svg?react";
import { FC } from "react";

const Logo: FC<{ parent: string }> = ({ parent }) => {
  return (
    <HashLink
      className={clsx(style.logo, style[`logo--${parent}`])}
      to={"/#top"}
      aria-label="logo"
      smooth
    >
      {/* <IconLogo /> */}
    </HashLink>
  );
};

export default Logo;
