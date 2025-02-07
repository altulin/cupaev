import { FC, useEffect, useState } from "react";
import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import Title from "@/UI/title/Title";
import { PressBtn } from "@/UI/button/PressElement";
import { formData } from "./formData";
import { ICard } from "@/components/home/promo/types";
import Field from "@/UI/form_hook/hoc/Field";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateSchema } from "@/UI/form_hook/utils/validation/yupSchemaCreator";
import { makeInitialValues } from "@/UI/form_hook/utils/initialValues";
import { format } from "date-fns";
import { setErrorModal } from "@/store/modal/modalSlice";
import { useLazyGetSeminarsQuery } from "@/store/rtk/seminars/get";
import { firstQuery } from "@/components/home/promo/script";
import useIsSmallDevice from "@/hooks/IsSmallDevice";
import Loading from "../template/Loading";

const ModalChange: FC = () => {
  const { modalState } = useAppSelector((state) => state.modal);
  const change = modalState?.change;
  const fields = formData(change as ICard);
  const isTablet = useIsSmallDevice();
  const dispatch = useAppDispatch();
  const [trigger] = useLazyGetSeminarsQuery({});
  const [isLoading, setIsLoading] = useState(false);

  const { ...methods } = useForm({
    resolver: yupResolver(validateSchema(fields || [])),
    mode: "onChange",
    defaultValues: makeInitialValues(fields || []),
  });

  const {
    reset,
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const onSubmit = (data: Record<string, unknown>) => {
    const { title, description, photo } = data;
    const newData: ICard = {
      date: format(data.date as Date, "dd.MM.yyyy"),
      time: format(data.time as Date, "HH:mm"),
      title: title as string,
      description: description as string,
      photo: photo as string,
      id:
        change && "id" in change && typeof change.id === "number"
          ? change.id
          : 0,
    };

    if (!isDirty) {
      //  проверка на изменение
      dispatch(setErrorModal("Вы ни чего не изменили"));
      return;
    }

    setIsLoading(true);

    trigger({ method: "PUT", body: newData, url: `/${newData.id}` })
      .then((res) => {
        if (res.isSuccess) {
          return trigger({ url: firstQuery(isTablet) });
        }
        return Promise.reject();
      })
      .then(() => {
        setIsLoading(false);
        dispatch(setErrorModal("Семинар изменен"));
      })
      .catch(() => {});
  };

  useEffect(() => {
    // существующие значения полей
    reset(change);
  }, [change, reset]);

  return (
    <Modal>
      <FormProvider {...methods}>
        <form
          className={clsx(style.modal__form)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Title
            label="Внесите необходимые изменения"
            className={clsx(style.modal__title)}
          />

          <div className={clsx(style.modal__fields)}>
            {fields &&
              fields.map((field) => {
                if (field.name === "id") {
                  return null;
                }

                return <Field key={field.name} {...field} />;
              })}
          </div>

          <PressBtn label="Изменить" type="submit" disabled={isLoading}>
            {isLoading && <Loading />}
          </PressBtn>
        </form>
      </FormProvider>
    </Modal>
  );
};
export default ModalChange;
