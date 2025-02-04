import { Props } from "react-burger-menu";
import style from "./Header.module.scss";

export const menu_classes: Props = {
  bodyClassName: "no-scroll",
  burgerButtonClassName: style.menu__burger,
  burgerBarClassName: style.menu__burger__bar,
  crossButtonClassName: style.menu__cross,
  crossClassName: style.menu__cross__icon,
  menuClassName: style.menu,
  morphShapeClassName: style.menu__shape,
  itemListClassName: style.menu__list,
  overlayClassName: style.menu__overlay,
};
