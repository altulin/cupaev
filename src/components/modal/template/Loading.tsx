import clsx from "clsx";
import { FC } from "react";
import { RotatingLines } from "react-loader-spinner";
import style from "./Modal.module.scss";

const Loading: FC = () => {
  return (
    <div className={clsx(style.loading)}>
      <RotatingLines strokeColor="#177165" strokeWidth="5" />
    </div>
  );
};
export default Loading;
