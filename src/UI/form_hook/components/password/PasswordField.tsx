import { FC, useState } from "react";
import ButtonEye from "@/UI/form_hook/components/password/ButtonEye";
import { ITextInput } from "@/UI/form_hook/utils/types";
import Input from "@/UI/form_hook/components/Input";

const PasswordField: FC<ITextInput> = ({ ...props }) => {
  const [isTypeText, setType] = useState(false);

  return (
    <>
      <Input {...props} type={isTypeText ? "text" : "password"} />
      <ButtonEye isTypeText={isTypeText} setType={setType} />
    </>
  );
};
export default PasswordField;
