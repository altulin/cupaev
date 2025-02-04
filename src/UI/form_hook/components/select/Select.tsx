/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC, useId } from "react";
import style from "@/UI/form_hook/Form.module.scss";
import Select from "react-select";

import { ITextInput } from "@/UI/form_hook/utils/types";
import IconArrow from "@/images/sprite/rule.svg";
import { getClasses, ITextInput_Modifier, wrapClass } from "./data";
import useGetFieldData from "@/UI/form_hook/hook/fieldData";
import Svg from "@/hoc/Svg";
import { useController } from "react-hook-form";

const MySelect: FC<ITextInput> = ({ ...props }) => {
  const { name, options, placeholder, modifier } = props;
  const id = useId();
  const { isError } = useGetFieldData(name);
  const {
    field: { onChange, value, onBlur },
  } = useController({
    name,
  });

  return (
    <Select
      inputId={id}
      defaultMenuIsOpen={false}
      options={options as any}
      placeholder={placeholder}
      className={clsx(style[wrapClass])}
      classNames={{
        ...getClasses(modifier as ITextInput_Modifier, isError),
      }}
      name={name}
      onBlur={onBlur}
      onChange={(val: any) => onChange(val?.value)}
      value={(options && options.find((el) => el.value === value)) || ""}
      components={{
        DropdownIndicator: () => <Svg icon={IconArrow} />,
      }}
      noOptionsMessage={() => "Данные не загрузились"}
    />
  );
};

export default MySelect;
