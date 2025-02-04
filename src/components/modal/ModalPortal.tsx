import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface IModalPortal {
  children: ReactNode;
}

const ModalPortal: FC<IModalPortal> = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  return ReactDOM.createPortal(children, modalRoot);
};
export default ModalPortal;
