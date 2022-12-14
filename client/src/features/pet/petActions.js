import { createAsyncThunk } from '@reduxjs/toolkit';

import * as petService from '../../services/petService';

export const getAllPets = createAsyncThunk('pet/getAll', async () => {
    const res = await petService.getAllPets();
    return res;
});

export const getPetById = createAsyncThunk('pet/getById', async (id) => {
    return await petService.getPetById(id);
});

export const createPet = createAsyncThunk(
    'pet/create',
    async ({ petObject }, { rejectWithValue }) => {
        try {
            await petService.createPet(petObject);
            return `Successfully added ${petObject.name}`;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const editPet = createAsyncThunk(
    'pet/edit',
    async ({ id, newDescription, petName }, { rejectWithValue }) => {
        try {
            await petService.editPet(id, newDescription);
            return `Successfully edited ${petName}`;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
