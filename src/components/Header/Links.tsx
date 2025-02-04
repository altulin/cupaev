import style from "./Header.module.scss";
import clsx from "clsx";
import { FC } from "react";
import { HashLink } from "react-router-hash-link";

const Links: FC<{ setMenu: (state: boolean) => void }> = ({ setMenu }) => {
  const links = [
    { label: "Призы", path: "#prizes", anchor: true },
    { label: "Как принять участие", path: "#how", anchor: true },
    { label: "Победители", path: "#winner", anchor: true },
    { label: "FAQ", path: "#faq", anchor: true },
    { label: "Обратная связь", path: "#feedback", anchor: true },
  ];

  return (
    <>
      {links.map((item, i) => (
        <HashLink
          key={i}
          className={clsx(style.link)}
          smooth
          to={`${item.path}`}
          onClick={() => {
            setMenu(false);
          }}
        >
          {item.label}
        </HashLink>
      ))}
    </>
  );
};

export default Links;
