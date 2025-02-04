import { FC, useId } from "react";
import { ITextInput } from "../utils/types";
import Label from "@/UI/form_hook/hoc/Label";
import clsx from "clsx";
import style from "@/UI/form_hook/Form.module.scss";
import Input from "@/UI/form_hook/components/Input";
import { useController } from "react-hook-form";
import IconRule from "@/images/sprite/rule.svg";
import Svg from "@/hoc/Svg";

const RadioGroup: FC<ITextInput> = ({ radio_list, children, ...props }) => {
  const id = useId();

  const {
    field: { value },
  } = useController({
    name: props.name,
  });

  return (
    <>
      {radio_list &&
        radio_list.map((item, i) => (
          <Label
            {...props}
            key={i}
            label_text={item.label}
            id={`${id}_${i}`}
            value={item.value}
            className={clsx(style.radio_el)}
          >
            <Input {...props} id={`${id}_${i}`} value={item.value} />

            <span className={clsx(style.radio_el__mark)}>
              {value === item.value && <Svg icon={IconRule} />}
            </span>

            {children}
          </Label>
        ))}
    </>
  );
};
export default RadioGroup;
