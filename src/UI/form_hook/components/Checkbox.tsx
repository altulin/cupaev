/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import style from "../Form.module.scss";
import IconRule from "@/images/sprite/rule.svg";
import { ITextInput } from "@/UI/form_hook/utils/types";
import useGetFieldData from "@/UI/form_hook/hook/fieldData";
import Svg from "@/hoc/Svg";
import Input from "@/UI/form_hook/components/Input";
import { useController } from "react-hook-form";

const Checkbox: FC<ITextInput> = ({ children, ...props }) => {
  const { modifier, checked } = props;
  const { isError } = useGetFieldData(props.name);
  const [val, setVal] = useState<any>(checked);

  const {
    field: { onChange },
  } = useController({
    name: props.name,
  });

  useEffect(() => {
    onChange(val);
  }, [onChange, val]);

  return (
    <>
      <Input
        {...props}
        value={val}
        onInput={() => setVal(!val)}
        checked={val}
      />
      <div
        className={clsx(
          style.checkbox,
          modifier && style[`checkbox--${modifier}`],
        )}
      >
        <span
          className={clsx(
            style.checkbox__icon,
            isError && style["checkbox__icon--error"],
          )}
        >
          {val && <Svg icon={IconRule} />}
        </span>

        {children}
      </div>
    </>
  );
};
export default Checkbox;
