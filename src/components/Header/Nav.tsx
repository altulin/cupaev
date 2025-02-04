import clsx from "clsx";
import style from "./Header.module.scss";
import useIsSmallDevice from "../../hooks/IsSmallDevice";
import { slide as Menu, Props } from "react-burger-menu";
import { FC } from "react";
import IconCross from "@/images/svg/menuClose.svg?react";
import IconBurger from "@/images/svg/burger.svg?react";
import { menu_classes } from "./data";

interface NavProps {
  children: React.ReactNode;
  isMenu: boolean;
  setMenu: (isOpen: boolean) => void;
}

const Nav: FC<NavProps> = ({ children, isMenu, setMenu }) => {
  const isMobileOrTablet = useIsSmallDevice();

  const menu_props: Props = {
    isOpen: isMenu,
    onStateChange: (state) => {
      setMenu(state.isOpen);
    },
    pageWrapId: "page-wrap",
    id: "page-wrap",
    outerContainerId: "root",
    className: clsx(style.menu__wrap),
    width: "100%",
    customCrossIcon: <IconCross />,
    customBurgerIcon: <IconBurger />,
  };

  return isMobileOrTablet ? (
    <Menu {...menu_props} {...menu_classes}>
      {children}
    </Menu>
  ) : (
    <nav className={clsx(style.nav)}>{children}</nav>
  );
};
export default Nav;
