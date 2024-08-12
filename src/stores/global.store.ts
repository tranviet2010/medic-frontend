import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface State {
    loading: boolean
    loadingData: boolean
    statusModal: boolean
    loadingedit: boolean
    activeTabs?: string | number
    dataModal?: any
    modal?: boolean
    activeModalId?: any
}

const initialState: State = {
    loading: false,
    loadingData: false,
    statusModal: false,
    loadingedit: false,
    activeTabs: 1,
    dataModal: [],
    modal: false,
    activeModalId: null
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setGlobalState(state, action: PayloadAction<Partial<State>>) {
            return { ...state, ...action.payload };
        },
        setModalTrue(state, action: PayloadAction<string | number>) { // Thêm id vào payload
            state.statusModal = true;
            state.activeModalId = action.payload; // Lưu id của modal
        },
        setModalFalse(state) {
            state.statusModal = false;
            state.dataModal = [];
            state.activeModalId = null; // Đặt lại activeModalId khi modal đóng
        },
        setDataModal(state, action: PayloadAction<any>) {
            state.dataModal = action.payload;
        },
        modalTrue(state, action: PayloadAction<string | number>) { // Thêm id vào payload
            state.modal = true;
            state.activeModalId = action.payload; // Lưu id của modal
        },
        modalFalse(state) {
            state.modal = false;
            state.dataModal = [];
            state.activeModalId = null; // Đặt lại activeModalId khi modal đóng
        },
    },
});


export const { setGlobalState, setModalTrue, setModalFalse, setDataModal, modalTrue, modalFalse } = globalSlice.actions;

export default globalSlice.reducer;
