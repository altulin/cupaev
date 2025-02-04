/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useId } from "react";
import { ITextInput } from "@/UI/form_hook/utils/types";
import Container from "@/UI/form_hook/hoc/Container";
import Label from "@/UI/form_hook/hoc/Label";
import { Controller, useFormContext } from "react-hook-form";
import Input from "@/UI/form_hook/components/Input";
import { checkArr } from "@/service/checkArr";

const Field: FC<ITextInput> = ({ component: Component, ...props }) => {
  const id = useId();
  const methods = useFormContext();

  const { validation_type, validations, ...labelProps } = props;
  const { label_text, ...inputProps } = labelProps;

  inputProps.id = id;

  return (
    <Container {...props}>
      {checkArr(props.radio_list) ? (
        <>{Component && <Component {...props} />}</>
      ) : (
        <Label {...labelProps} id={id}>
          <Controller
            control={methods.control}
            name={props.name}
            render={() => {
              return Component === undefined ? (
                <Input {...inputProps} />
              ) : (
                <Component {...inputProps} />
              );
            }}
          ></Controller>
        </Label>
      )}
    </Container>
  );
};
export default Field;
