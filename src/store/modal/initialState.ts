/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICard } from "@/components/home/promo/types";

export enum EKeys {
  AUTH = "auth",
  ERROR = "error",
  SUCCESS = "success",
  REGISTRATION = "registration",
  WARNING = "warning",
  CHANGE = "change",
}

export const keysArray = Object.values(EKeys);

export type TModalState = {
  [K in (typeof keysArray)[number]]?:
    | { step: number }
    | { text: string }
    | { text: string; id: number }
    | ICard;
};

interface IInitialState {
  modalState: TModalState | null;
}

export const initialState: IInitialState = {
  modalState: null,
};
