import style from "./Modal.module.scss";
import clsx from "clsx";
import ModalPortal from "../ModalPortal";
import Icon from "@/images/svg/menuClose.svg?react";
import { clearModal } from "@/store/modal/modalSlice";
import { useClickAway } from "@uidotdev/usehooks";
import { FC, ReactNode, RefObject, useCallback, useEffect } from "react";
import { useAppDispatch } from "@/hooks/hook";

interface IModal {
  children: ReactNode;
}

const Modal: FC<IModal> = ({ children }) => {
  const dispatch = useAppDispatch();

  const clearMod = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      if (e.key === "Escape") {
        dispatch(clearModal());
      }
    },

    [dispatch],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.addEventListener("keydown", clearMod);

    return () => {
      document.body.style.overflow = "visible";
      document.body.removeEventListener("keydown", clearMod);
    };
  }, [clearMod]);

  const ref = useClickAway(() => {
    dispatch(clearModal());
  });

  return (
    <ModalPortal>
      <div className={clsx(style.modal)}>
        <div className={clsx(style.modal__overlay, "scroll")}>
          <div
            ref={ref as RefObject<HTMLDivElement>}
            className={clsx(style.modal__inner)}
          >
            <button
              className={clsx(style.modal__close)}
              onClick={() => dispatch(clearModal())}
            >
              <Icon />
            </button>
            {children}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
export default Modal;
