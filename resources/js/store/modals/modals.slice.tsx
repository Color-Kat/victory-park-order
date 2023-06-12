import React from "react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
    isCallRequestModalOpen: boolean,
    callRequestModalData: any,

    officeModalOfficeId: false|number,
    officeModalOfficeType: 'rent' | 'sell'
}  = {
    isCallRequestModalOpen: false,
    callRequestModalData: null,

    officeModalOfficeId: false,
    officeModalOfficeType: 'rent'
};

export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openCallRequestModal(state, action: PayloadAction<any>) {
            state.isCallRequestModalOpen = true;
            state.callRequestModalData = action.payload;
        },
        closeCallRequestModal(state) {
            state.isCallRequestModalOpen = false;
        },

        openOfficeModal(state, action: PayloadAction<{
            id: number,
            type: 'rent' | 'sell'
        }>) {
            state.officeModalOfficeId = action.payload.id;
            state.officeModalOfficeType = action.payload.type;
        },
        closeOfficeModal(state) {
            state.officeModalOfficeId = false;
        },
    }
});

export const {
    openCallRequestModal,
    closeCallRequestModal,
    openOfficeModal,
    closeOfficeModal
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
