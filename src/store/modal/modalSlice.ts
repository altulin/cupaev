import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { ICard } from "@/components/home/promo/types";

const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    clearModal(state) {
      state.modalState = null;
    },

    setErrorModal(state, action: PayloadAction<string>) {
      state.modalState = { error: { text: action.payload } };
    },

    setSuccessModal(state, action: PayloadAction<string>) {
      state.modalState = { success: { text: action.payload } };
    },

    setWarningModal(
      state,
      action: PayloadAction<{
        text: string;
        id: number;
      }>,
    ) {
      state.modalState = { warning: action.payload };
    },

    setChangeModal(state, action: PayloadAction<ICard>) {
      state.modalState = { change: action.payload };
    },
  },
});

export const {
  clearModal,
  setErrorModal,
  setSuccessModal,
  setWarningModal,
  setChangeModal,
} = modalSlice.actions;
export default modalSlice.reducer;
