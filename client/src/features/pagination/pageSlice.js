import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    totalItemsCount: 1,
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        increment: (state) => {
            state.currentPage += 1;
        },
        decrement: (state) => {
            state.currentPage -= 1;
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        resetPage: (state) => {
            state.currentPage = 1;
        },
        setPageItemsCount: (state, action) => {
            state.totalItemsCount = action.payload;
        },
    },
});

export const { increment, decrement, setPage, resetPage, setPageItemsCount } =
    pageSlice.actions;

export const selectPageData = (state) => state.page;

export default pageSlice.reducer;
