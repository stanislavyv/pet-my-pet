import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShown: false,
    toDeleteId: '',
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.isShown = true;
            state.toDeleteId = action.payload;
        },
        hideModal: (state) => {
            state.isShown = false;
            state.toDeleteId = '';
        },
    },
});

export const { showModal, hideModal } = modalSlice.actions;

export const selectModalState = (state) => state.modal;

export default modalSlice.reducer;
