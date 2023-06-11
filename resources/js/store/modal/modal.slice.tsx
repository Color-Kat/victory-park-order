import React from "react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {isOpen: boolean}  = {
    isOpen: false,
};

export const modalCallRequestSlice = createSlice({
    name: 'modalCallRequest',
    initialState,
    reducers: {
        openModal(state) {
            state.isOpen = true;
        },
        closeModal(state) {
            state.isOpen = false;
        },
        setModalIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        },
    }
});

export const {openModal, closeModal, setModalIsOpen} = modalCallRequestSlice.actions;
export const modalReducer = modalCallRequestSlice.reducer;
