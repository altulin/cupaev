import {
  Middleware,
  MiddlewareAPI,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { setErrorModal } from "../modal/modalSlice";
import { dataErr } from "./dataErrors";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const code = (action.payload as { status: number }).status;

      if (!code) return next(action);

      if (code === 401) {
        // return next(action);
      }

      if (Object.keys(dataErr).includes(code.toString())) {
        api.dispatch(setErrorModal(dataErr[code as keyof typeof dataErr]));
      }
    }

    return next(action);
  };
