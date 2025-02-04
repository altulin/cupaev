import { useState } from "react";
import style from "./Header.module.scss";
import clsx from "clsx";
import Links from "./Links";
import Nav from "./Nav";
import Logo from "@/UI/logo/Logo";
import Headroom from "react-headroom";

const Header = () => {
  const [isMenu, setMenu] = useState(false);
  const [isScrollHeader, setScrollHeader] = useState(false);

  const handleUnpin = () => {
    if (isScrollHeader) return;
    setTimeout(() => {
      setScrollHeader(true);
    }, 500);
  };

  const handleUnfix = () => {
    setScrollHeader(false);
  };

  return (
    <Headroom
      onUnpin={handleUnpin}
      onUnfix={handleUnfix}
      upTolerance={0}
      downTolerance={0}
    >
      <header
        className={clsx(style.header, isScrollHeader && style.header_scroll)}
      >
        <div
          className={clsx(
            style.header__inner,
            isScrollHeader && style.header_scroll__inner,
          )}
        >
          <Logo parent={"header"} />

          <Nav isMenu={isMenu} setMenu={setMenu}>
            <Links setMenu={setMenu} />
          </Nav>
        </div>
      </header>
    </Headroom>
  );
};
export default Header;
