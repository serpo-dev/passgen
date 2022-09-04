import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        cR: (state, action) => {
            state.value = action.payload;
        },
        rR: state => {
            state.value = [];
        },
    },
});

export const { cR, rR } = resultSlice.actions;

export default resultSlice.reducer;
