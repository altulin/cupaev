import { FC, useState } from "react";
import style from "./Header.module.scss";
import clsx from "clsx";
import Headroom from "react-headroom";

const Header: FC = () => {
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
        ></div>
      </header>
    </Headroom>
  );
};
export default Header;
