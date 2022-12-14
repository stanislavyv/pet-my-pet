import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        type: '',
        message: '',
        isActive: false,
    },
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        notifyInfo: (state, action) => {
            state.value = {
                type: 'info',
                message: action.payload,
                isActive: true,
            };
        },
        notifyError: (state, action) => {
            state.value = {
                type: 'error',
                message: action.payload,
                isActive: true,
            };
        },
        setInactive: (state) => {
            state.value.isActive = false;
        },
    },
});

export const selectNotification = (state) => state.notification.value;

export const { notifyInfo, notifyError, setInactive } =
    notificationSlice.actions;

export default notificationSlice.reducer;
