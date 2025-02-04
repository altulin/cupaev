import { useFormContext } from "react-hook-form";

const useGetFieldData = (name: string) => {
  const { formState } = useFormContext();

  const { errors } = formState;

  const isError = errors[name] ? true : false;
  const error_text = errors[name] ? errors[name].message : null;

  return { isError, error_text };
};

export default useGetFieldData;
