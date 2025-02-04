import IconEye from "@/images/sprite/eye.svg";
import IconEyeOff from "@/images/sprite/eye-off.svg";
import style from "@/UI/form_hook/Form.module.scss";
import clsx from "clsx";
import { FC } from "react";
import Svg from "@/hoc/Svg";

interface IButtonEye {
  isTypeText: boolean;
  setType: (type: boolean) => void;
}

const ButtonEye: FC<IButtonEye> = ({ isTypeText, setType }) => {
  return (
    <button
      type="button"
      onClick={() => setType(!isTypeText)}
      className={clsx(style.button)}
    >
      {isTypeText && (
        <Svg icon={IconEye} className={clsx(style.button__icon)} />
      )}
      {!isTypeText && (
        <Svg icon={IconEyeOff} className={clsx(style.button__icon)} />
      )}
    </button>
  );
};

export default ButtonEye;
