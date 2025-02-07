import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
import clsx from "clsx";
import { FC, useState } from "react";
import { PressBtn } from "@/UI/button/PressElement";
import Title from "@/UI/title/Title";
import { useLazyGetSeminarsQuery } from "@/store/rtk/seminars/get";
import { setErrorModal } from "@/store/modal/modalSlice";
import { firstQuery } from "@/components/home/promo/script";
import useIsSmallDevice from "@/hooks/IsSmallDevice";
import Loading from "../template/Loading";

const ModalWarning: FC = () => {
  const { modalState } = useAppSelector((state) => state.modal);
  const [trigger] = useLazyGetSeminarsQuery({});
  const dispatch = useAppDispatch();
  const isTablet = useIsSmallDevice();
  const warning = modalState?.warning;
  const [isLoading, setIsLoading] = useState(false);
  if (!warning || !("text" in warning) || !("id" in warning)) {
    return null;
  }

  const { text, id } = warning;

  const handleDelete = () => {
    setIsLoading(true);
    trigger({
      url: `${id}`,
      method: "DELETE",
    })
      .then((res) => {
        if (res.isSuccess) {
          return trigger({ url: firstQuery(isTablet) });
        }
        return Promise.reject();
      })
      .then(() => {
        setIsLoading(false);
        dispatch(setErrorModal("Семинар удален"));
      })
      .catch(() => {});
  };

  return (
    <Modal>
      <div className={clsx(style.modal__form)}>
        {text && <Title label={text} className={clsx(style.modal__title)} />}

        <PressBtn
          label="Удалить"
          onClick={() => handleDelete()}
          disabled={isLoading}
        >
          {isLoading && <Loading />}
        </PressBtn>
      </div>
    </Modal>
  );
};
export default ModalWarning;
