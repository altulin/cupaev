import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { ICardBlock } from "./types";

const CardBlock: FC<ICardBlock> = (props) => {
  const { label, text } = props;
  return (
    <p className={clsx(style.block)}>
      <span className={clsx(style["block__label"])}>{`${label}:`}</span>
      <span className={clsx(style["block__text"])}>{text}</span>
    </p>
  );
};

export default CardBlock;
