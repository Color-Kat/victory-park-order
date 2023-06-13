import React from "react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
    isCallRequestModalOpen: boolean,
    callRequestModalData: any,

    isWhatsAppRequestModalOpen: boolean,
    whatsAppRequestModalData: any,

    officeModalOfficeId: false|number,
    officeModalOfficeType: 'rent' | 'sell'
}  = {
    isCallRequestModalOpen: false,
    callRequestModalData: null,

    isWhatsAppRequestModalOpen: false,
    whatsAppRequestModalData: null,

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

        openWhatsAppRequestModal(state, action: PayloadAction<any>) {
            state.isWhatsAppRequestModalOpen = true;
            state.whatsAppRequestModalData = action.payload;
        },
        closeWhatsAppRequestModal(state) {
            state.isWhatsAppRequestModalOpen = false;
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
    openWhatsAppRequestModal,
    closeWhatsAppRequestModal,
    openOfficeModal,
    closeOfficeModal
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
