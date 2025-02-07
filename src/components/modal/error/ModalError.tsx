import { FC } from "react";
import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
import clsx from "clsx";
import { useAppSelector } from "@/hooks/hook";
import Title from "@/UI/title/Title";

const ModalError: FC = () => {
  const { modalState } = useAppSelector((state) => state.modal);

  const error = modalState?.error;

  if (!error || !("text" in error)) {
    return null;
  }

  const { text } = error;

  return (
    <Modal>
      <div className={clsx(style.modal__form)}>
        <div className={clsx(style["modal-form__wrap"])}>
          {text && <Title label={text} className={clsx(style.modal__title)} />}
        </div>
      </div>
    </Modal>
  );
};
export default ModalError;
