import { FC } from "react";
import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
import clsx from "clsx";
import { useAppSelector } from "@/hooks/hook";

const ModalError: FC = () => {
  const { modalState } = useAppSelector((state) => state.modal);

  return (
    <Modal>
      <div className={clsx(style.modal__form)}>
        <div className={clsx(style["modal-form__wrap"])}>
          <h2 className={clsx(style.modal__title, style["modal__title--succ"])}>
            {modalState?.error?.text}
          </h2>
        </div>
      </div>
    </Modal>
  );
};
export default ModalError;
