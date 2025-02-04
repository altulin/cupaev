import { FC } from "react";
import { HashLink } from "react-router-hash-link";
import {
  IPressBtn,
  IPressLink,
  TPressComponent,
  IPressHashLink,
} from "./types";
import clsx from "clsx";
import style from "./PressElement.module.scss";

const PressComponent: FC<typeof TPressComponent> = ({ ...props }) => {
  const { label, icon = null, icon_pos = "left" } = props;

  return (
    <span
      className={clsx(style.label, icon_pos && style[`label--${icon_pos}`])}
    >
      {icon && <span className={clsx(style.label__icon)}>{icon}</span>}
      <span className={clsx(style.label__text)}>{label}</span>
    </span>
  );
};

export const PressBtn: FC<IPressBtn> = ({ ...props }) => {
  const { class_name, type = "button" } = props;
  return (
    <button type={type} className={clsx(style.press, class_name)} {...props}>
      <PressComponent {...props} />
    </button>
  );
};

export const PressLink: FC<IPressLink> = ({ ...props }) => {
  const { class_name } = props;
  return (
    <a className={clsx(style.press, class_name)} {...props}>
      <PressComponent {...props} />
    </a>
  );
};

export const PressHashLink: FC<IPressHashLink> = ({ ...props }) => {
  const { class_name } = props;

  return (
    <HashLink className={clsx(style.press, class_name)} {...props}>
      <PressComponent {...props} />
    </HashLink>
  );
};
