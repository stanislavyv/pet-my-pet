import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as userService from '../../services/userService';

const initialState = {
    userInfo: {},
    loading: true,
    success: false,
    error: null,
};

export const registerUser = createAsyncThunk(
    'user/register',
    async ({ email, username, password }, { rejectWithValue }) => {
        try {
            await userService.createUser(email, username, password);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            await userService.signIn(email, password);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const logoutUser = createAsyncThunk('user/logout', async () => {
    userService.logout();
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
            state.isLoggedIn = true;
            state.loading = false;
        },
        resetUserInfo: (state) => {
            state.userInfo = {
                email: '',
                username: '',
                _id: '',
            };
            state.isLoggedIn = false;
            state.loading = false;
        },
        resetFormState: (state) => {
            state.success = false;
            state.error = null;
        },
    },
    extraReducers(builder) {
        // register
        builder
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = true;
                state.success = true; // registration successful
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload;
            })
            // login
            .addCase(loginUser.fulfilled, (state) => {
                state.loading = true;
                state.success = true; // login successful
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload;
            })
            // logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = true;
            });
    },
});

export const { setUserInfo, resetUserInfo, resetFormState } = userSlice.actions;

export const selectUserState = (state) => state.user;

export default userSlice.reducer;
