import { configureStore } from '@reduxjs/toolkit';

import notificationSlice from '../features/notification/notificationSlice';
import userSlice from '../features/auth/userSlice';
import pageSlice from '../features/pagination/pageSlice';
import modalsSlice from '../features/modal/modalsSlice';
import petSlice from '../features/pet/petSlice';

export const store = configureStore({
    reducer: {
        notification: notificationSlice,
        user: userSlice,
        page: pageSlice,
        modal: modalsSlice,
        pet: petSlice
    },
});
