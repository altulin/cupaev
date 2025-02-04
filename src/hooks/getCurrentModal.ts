import { TModalState } from "@/store/modal/initialState";

const useGetCurrentModal = (modalState: TModalState | null) => {
  if (!modalState) return;

  const key = Object.keys(modalState)[0];

  if (!key) return;

  let modal;

  switch (key) {
    case "error":
      modal = key;
      break;

    case "success":
      modal = key;
      break;

    default:
      modal = `${key}-${
        (modalState as { [key: string]: { step: number } })[key]["step"]
      }`;
  }

  return modal;
};

export default useGetCurrentModal;
