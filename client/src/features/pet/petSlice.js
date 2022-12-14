import { createSlice } from '@reduxjs/toolkit';

import { getAllPets, getPetById, editPet, createPet } from './petActions';

const initialState = {
    value: [],
    loading: true,
    success: {
        status: false,
        message: '',
    },
    error: null,
};

export const petSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        resetFormState: (state) => {
            state.success.status = false;
            state.success.message = '';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // get all pets
            .addCase(getAllPets.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllPets.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload.result;
            })
            // create pet
            .addCase(createPet.fulfilled, (state, action) => {
                state.success.status = true;
                state.success.message = action.payload;
            })
            .addCase(createPet.rejected, (state, action) => {
                state.error = action.payload;
            })
            // edit pet
            .addCase(editPet.fulfilled, (state, action) => {
                state.success.status = true;
                state.success.message = action.payload;
            })
            .addCase(editPet.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const selectAllPets = (state) => state.pet.value;

export const selectPetState = (state) => state.pet;

export const { resetFormState } = petSlice.actions;

export default petSlice.reducer;
