import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TModalState, initialState } from "./initialState";

const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    stepTo(state, action: PayloadAction<TModalState>) {
      state.modalState = action.payload;
    },

    clearAllStep(state) {
      state.modalState = null;
    },

    setErrorModal(state, action: PayloadAction<string>) {
      state.modalState = { error: { text: action.payload } };
    },

    setSuccessModal(state, action: PayloadAction<string>) {
      state.modalState = { success: { text: action.payload } };
    },
  },
});

export const { stepTo, clearAllStep, setErrorModal, setSuccessModal } =
  modalSlice.actions;
export default modalSlice.reducer;
